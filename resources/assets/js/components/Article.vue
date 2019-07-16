<template>
    <div>
        <h1>{{ title }}</h1>

        <hr>

        <p> {{ body }}</p>

        <form class="mb-3" @submit.prevent="addCommentary">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Add a new commentary" v-model="commentary.comment">
            </div>

            <button type="submit" class="btn btn-light btn-block">Save</button>
        </form>

        <hr>

        <ul>
            <li v-for="commentary in commentaries" :key="commentary.id">
                Comentário: {{ commentary.comment }}
            </li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Article',
        data(){
            return {
                id: this.$route.params.id,
                title: '',
                body: '',
                commentaries:{

                },
                commentary: {
                    article_id: this.$route.params.id,
                    comment: ''
                }
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/api/article/'+this.id).then(
                res => {
                    console.log(res);
                    this.title = res.data.data.title;
                    this.body = res.data.data.body;
                    this.commentaries = res.data.data.comments;
                }
            ).catch(err => {
                console.log(err);
                this.title = "Esse artigo não existe ou está com problemas";
                this.body = "Entre em contato com o administrador para mais detalhes";
            });


        },
        methods:{
            fetchCommentaries(id){
                axios.get('/api/commentaries/'+id).then(
                    res => {
                        console.log(res);
                        this.commentaries = res.data.data;
                    }
                )
            },
            addCommentary(){
                fetch('/api/commentary',{
                    method: 'post',
                    body: JSON.stringify(this.commentary),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(res => res.json()
                    .then(data => {
                      this.commentary.comment = '';
                      alert("Commentary Added");

                      this.fetchCommentaries(this.id);
                    })
                ).catch(err => console.log(err));
            }
        }
    }
</script>

<style scoped>

</style>