import React, { Component } from 'react';

export default class EditSongModal extends Component {

    render() {
        const { songKeyPair, editSongCallback, hideEditSongModalCallback } = this.props;
        let title = "";
        let artist = "";
        let ytlink = "";
        if (songKeyPair) {
            title = songKeyPair.song.title;
            artist = songKeyPair.song.artist;
            ytlink = songKeyPair.song.youTubeId;
        }
        

        //console.log(songKeyPair);
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div className="editModal">
                            <p className="editText"> Title: </p>
                            <input id = "tid" className="tid" defaultValue={title}></input>
                        </div>
                        <div className="editModal">
                            <p className="editText"> Artist: </p>
                            <input id = "atid" className="atid" defaultValue={artist}></input>
                        </div>
                        <div className="editModal">
                            <p className="editText"> Youtube Id </p>
                            <input id = "ytid" className="ytid" defaultValue={ytlink}></input>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-list-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}