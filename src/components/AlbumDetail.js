import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



const AlbumDetail = ({data}) => {

    const { title, artist, thumbnail_image, image, url } = data;
    const { 
        headerContentStyle, 
        thumbnailStyle,
        thumnailContainerStyle,
        headerTextStyle,
        thumbnailImageStyle
    } = styles;

    return (
        <Card>
            
            <CardSection>
                <View style={thumnailContainerStyle} >
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={thumbnailImageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Purchase Now
                </Button>
            </CardSection>

        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailImageStyle: {
        height: 300,
        width: null,
        flex: 1
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;