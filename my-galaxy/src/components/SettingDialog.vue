<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        <v-list-tile slot="activator">
            <v-list-tile-action>
                <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>프로필 설정</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-card>
            <v-card-title>
                <span class="headline">프로필 설정</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                            <img :src="imageUrl" height="150" v-if="imageUrl"/>
                            <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                            <input
                                    type="file"
                                    style="display: none"
                                    ref="image"
                                    accept="image/*"
                                    @change="onFilePicked"
                            >
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-model="uploadUserName" label="이름"></v-text-field>
                            <v-text-field v-model="uploadUserComment" label="한줄소개" ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="onSave">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script type="text/javascript" scoped>
    import axios from 'axios';

    export default {
        data: () => ({
            dialog: false,
            imageName: '',
            imageUrl: '',
            imageFile: '',

            uploadUserName: '',
            uploadUserComment: '',

            config: { header : {
                'Content-Type' : 'multipart/form-data'
            }},
        }),
        methods: {
            pickFile () {
                this.$refs.image.click ()
            },

            onFilePicked (e) {
                const files = e.target.files;
                if(files[0] !== undefined) {
                    this.imageName = files[0].name;
                    if(this.imageName.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader ();
                    fr.readAsDataURL(files[0]);
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result;
                        this.imageFile = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.imageName = '';
                    this.imageFile = '';
                    this.imageUrl = ''
                }
            },

            // 프로필 수정
            onSave() {
                const data = new FormData();
                data.append('name', this.uploadUserName);
                data.append('comment', this.uploadUserComment);
                data.append('img', this.imageFile, this.imageFile.name);

                axios.post('/me/profile', data, this.config)
                // SUCCESS
                    .then( response => {
                        this.$emit('updateProfile', response.data);
                    })
                // ERROR
                    .finally(() => {
                        this.dialog = false;
                    })
            }
        }

    }
</script>

<style type="text/css" scoped>

</style>