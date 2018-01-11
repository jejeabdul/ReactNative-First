import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        console.log('Hai');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(result => {
            console.log(result, 'Result');
            this.setState({ albums: result.data });
        });
    }

    renderDataAlbum() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} data={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderDataAlbum()}
            </ScrollView>
        );
    }
};

export default AlbumList;