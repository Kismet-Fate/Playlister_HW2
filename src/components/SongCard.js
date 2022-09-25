import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: null,
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            n: prevState.n,
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            n: prevState.n,
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            n: prevState.n,
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            n: prevState.n,
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            n: prevState.n,
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    handleDeleteSong = (event) => {
        this.setState(prevState => ({
            n: this.props.song,
            isDragging: prevState.isDragging,
            draggedTo: prevState.draggedTo
        }));
        event.stopPropagation();
        let keySongPair = {key: this.getItemNum(), song: this.props.song};
        this.props.deleteSongCallback(keySongPair);
    }
    handleEditSong = (event) => {
        this.setState(prevState => ({
            n: this.props.song,
            isDragging: prevState.isDragging,
            draggedTo: prevState.draggedTo
        }));
        event.stopPropagation();
        
        let keySongPair = {key: this.getItemNum(), song: this.props.song};
        //console.log(keySongPair);
        this.props.editSongCallback(keySongPair);
    }

    handleClick = (event) => {
        if (event.detail === 2) {
            this.handleEditSong(event);
        }
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        
        const { song } = this.props;
        let yt = "https://www.youtube.com/watch?v=" + song.youTubeId;
        let num = this.getItemNum();
        console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass + " unselected-song-card"}
                onClick={this.handleClick}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
            >
                {num}. <a href = {yt}>{song.title} by {song.artist}</a>
                <input
                        type="button"
                        id={"delete-song-" + num}
                        className="song-card-button"
                        onClick={this.handleDeleteSong}
                        value={"X"} />
            </div>
        )
    }
}