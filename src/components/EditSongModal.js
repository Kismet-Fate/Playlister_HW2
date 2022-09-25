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

        console.log(songKeyPair);
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div className="margin-bottom:-1rem; padding-top: 0rem; padding-bottom: 0rem;">
                            <p className="font-weight:bold; display:inline-block; font-size:1.7rem"> Title: </p>
                            <input id = "tid" className="margin-left:64px;" defaultValue={title}></input>
                        </div>
                        <div className="margin-bottom:-1rem; margin-top:-1rem; padding-top: 0rem; padding-bottom: 0rem;">
                            <p className="font-weight:bold; display:inline-block; font-size:1.7rem;"> Artist: </p>
                            <input id = "atid" className="margin-left:48px;" defaultValue={artist}></input>
                        </div>
                        <div className="margin-top:-1rem; padding-top: 0rem; padding-bottom: 0rem;">
                            <p className="font-weight:bold; display:inline-block; font-size:1.7rem"> Youtube Id </p>
                            <input id = "ytid" className="margin-left:1rem;" defaultValue={ytlink}></input>
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