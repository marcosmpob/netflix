import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; 

export default class CameraScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: Camera.Constants.Type.back, hasPermission: null }
    }

    componentDidMount() {

        const handlePermission = async () => {
            const { status } = await Camera.requestPermissionsAsync();
            this.setState({ hasPermission: status === 'granted' });

        }

        handlePermission();

    }

    render() {
        return (

            <View style={{ flex: 1}}>
                <Camera
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    style={{ flex: 1 }} type={this.state.type}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={ async () => {
                                // this.setState({ 
                                //     type:
                                //     this.state.type === Camera.Constants.Type.back
                                //     ? Camera.Constants.Type.front
                                //     : Camera.Constants.Type.back
                                // });
                                const options = {quality: 2.5, base64: true};
                                if (this.camera) {
                                    //console.log('tirou foto')
                                    let photo = await this.camera.takePictureAsync(options);
                                    this.props.navigation.navigate('More',{
                                        image: photo.uri,
                                        name: this.props.route.params.name,
                                        icon: null 
                                    });
                                }
                            }}
                        >
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Take </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={ async () => {
                                this.setState({ 
                                    type:
                                    this.state.type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, marginBottom:10, color: 'white' }}> </Text>
                            <Ionicons name="md-reverse-camera" size={24} color="white" />
                        </TouchableOpacity>                        
                    </View>
                </Camera>
            </View>
        );
    }
}