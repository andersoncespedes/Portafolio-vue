<script>
import { defineComponent } from 'vue'
import { CoGithub } from "oh-vue-icons/icons";
import Perfil from '@/assets/Img/Perfil.png';

export default defineComponent(
    {
        name: 'Showcase',
        data() {
            return {
                perfil: Perfil
            }
        },
        mounted() {
            this.handleScrollShowcase();
        },
        methods: {
            handleScrollShowcase: function (evt, el) {
                const showcaseElement = this.$refs.showcase;
                showcaseElement.setAttribute(
                    'style',
                    'opacity: 1; transform: translate3d(0, -10px, 0)'
                )

                return window.scrollY > 100
            }
        },
    }

)
</script>
<template>
    <div class="showcase" ref="showcase" v-show="isVisible">
        <div class="container">
            <div class="row">
                <div class="showcase-content-side col-md-7 col-sm-12 m-auto d-flex flex-wrap justify-content-center">
                    <img :src="perfil" class="img-fluid image-anima" style="min-width: 400px; max-height: 500px;"><br>
                    <div class="w-100">
                        <client-only>
                            <center>
                                <ul class="showcase__socialmedia">
                                    <li><v-icon name="bi-github" scale="2" /></li>
                                    <li><v-icon name="bi-linkedin" scale="2" /></li>
                                    <li><v-icon name="bi-twitter" scale="2" /></li>
                                    <li><v-icon name="bi-instagram" scale="2" /></li>

                                </ul>
                            </center>
                        </client-only>
                    </div>

                </div>
                <div class="showcase-content-principal col-md-5">
                    <h4>Hola, mi nombre es </h4>
                    <h2 style="color:gray;">Anderson Cespedes</h2>
                    <p style="text-align: justify;">
                        Ingeniero informático con experiencia en el área del
                        sector de la tecnologia e innovacion. Estoy en capacidad de desempeñar
                        con éxito las tareas que me
                        han sido encomendadas de acuerdo con mi
                        experiencia laboral, sentido del deber y proactividad.
                        lo que me ha permitido desarrollar funciones de una manera más óptima
                    </p>
                    <hr>
                    <center>
                        <h2>Tecnologias</h2>
                    </center>
                    <h3>Frameworks</h3>
                    <client-only>
                        <v-icon name="fa-laravel" scale="2" animation="float" />
                        <v-icon name="io-logo-nodejs" scale="2" animation="float" />
                        <v-icon name="si-dotnet" scale="2" animation="float" />
                        <v-icon name="co-spring" scale="2" animation="float" />
                        <v-icon name="co-django" scale="2" animation="float" />
                        <v-icon name="io-logo-vue" scale="2" animation="float" />
                        <v-icon name="co-angular" scale="2" animation="float" />
                        <v-icon name="si-blazor" scale="2" animation="float" />
                        <v-icon name="co-bootstrap" scale="2" animation="float" />
                        <v-icon name="si-tailwindcss" scale="2" animation="float" />
                    </client-only>
                    <h3>Lenguajes</h3>
                    <client-only>
                        <v-icon name="si-csharp" scale="2" animation="float" />
                        <v-icon name="co-js" scale="2" animation="float" />
                        <v-icon name="co-php" scale="2" animation="float" />
                        <v-icon name="co-python" scale="2" animation="float" />
                        <v-icon name="la-html5" scale="2" animation="float" />
                        <v-icon name="io-logo-css3" scale="2" animation="float" />
                        <v-icon name="fa-database" scale="2" animation="float" />
                        <v-icon name="la-java" scale="2" animation="float" />
                        <v-icon name="si-typescript" scale="2" animation="float" />
                    </client-only>
                    <h3>Gestores de Base de Datos</h3>
                    <client-only>
                        <v-icon name="co-mysql" scale="2" animation="float" />
                        <v-icon name="si-microsoftsqlserver" scale="2" animation="float" />
                        <v-icon name="co-postgresql" scale="2" animation="float" />
                        <v-icon name="co-mongodb" scale="2" animation="float" />
                    </client-only>

                </div>
            </div>

        </div>

    </div>
</template>
<style setup>
.showcase {
    background: url("../assets/Img/dibujos-vintage-aesthetic-18.webp");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    background-attachment: fixed; 
    background-position: center center;
    padding: 1rem;
    background-position: 100%;
    opacity: 0;
    padding-top: 2rem;
    position: relative;
    z-index: 1;
    color: white;
}

.showcase__socialmedia li {
    display: inline-flex;
    padding: 5px;
}

.showcase::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Negro con 50% de opacidad */
    /* Negro con 50% de opacidad */
}

.showcase-content-side {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 14px;
}

.image-anima {
    animation-name: PerfilAnimation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transition: 300ms all ease;
}

.showcase-content-principal {
    margin: auto;
}

@media screen and (max-width: 800px) {
    .showcase {
        background-repeat: no-repeat;
        background-size: cover;
        /* ajustar el tamaño para cubrir el contenedor */
        background-repeat: no-repeat;
        background-position: left top;
        /* mostrar la parte superior izquierda */
        /* otras propiedades de estilo */
    }
}

@keyframes PerfilAnimation {
    0% {
        margin-right: 0;
    }

    50% {
        margin-right: 20px;

    }

    100% {
        margin-right: 0;
    }
}
</style>