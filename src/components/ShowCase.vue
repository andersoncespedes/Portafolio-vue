<script>
import { defineComponent } from 'vue'
import { CoGithub } from "oh-vue-icons/icons";
export default defineComponent(
    {
        name: 'Showcase',
        data() {
            return {
                perfil: "../assets/Img/Perfil.jpg"
            }
        }
    }
)
</script>
<template>
    <div class="showcase">
        <div class="container">
            <div class="row">
                <div class="showcase-content-side col-md-7">
                </div>
                <div class="showcase-content-principal col-md-5">
                    <h4>Hola, mi nombre es </h4>
                    <h2 style="color:gray;">Anderson Cespedes</h2>
                    <p style="text-align: justify;">
                        Ingeniero informático con experiencia en el área del
                        sector de la tecnologia e innovacion. Soy una persona
                        capaz de desempeñar con éxito las tareas que me
                        han sido encomendadas de acuerdo con mi
                        experiencia laboral, sentido del deber y proactividad.
                        Lo que me permite desempeñar mis funciones de la
                        mejor manera.
                    </p>
                    <hr>
                    <center>
                        <h2>Tecnologias</h2>
                    </center>
                    
                    <client-only>
                        <v-icon name="bi-github" scale="2" />
                        <v-icon name="bi-linkedin" scale="2" />
                        <v-icon name="bi-twitter" scale="2" />
                        <v-icon name="bi-instagram" scale="2" />
                    </client-only>
                    <client-only>
                        <center>
                            <v-icon name="bi-github" scale="2" />
                            <v-icon name="bi-linkedin" scale="2" />
                            <v-icon name="bi-twitter" scale="2" />
                            <v-icon name="bi-instagram" scale="2" />
                        </center>

                    </client-only>
                </div>
            </div>

        </div>

    </div>
</template>
<style setup>
.showcase {
    background: url("../assets/Img/dibujos-vintage-aesthetic-18.webp");
    min-height: 100vh;
    width: 100%;
    background-position: 100%;
    padding-top: 2rem;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 10px black;
    margin-bottom: 20px;
    color: white;
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
}

.showcase-content-principal {
    margin: auto;
}
</style>