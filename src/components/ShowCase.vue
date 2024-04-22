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
                    <h3>Hola, mi nombre es </h3>
                    <h2>Anderson Cespedes</h2>
                    Ingeniero informático con experiencia en el área del
                    sector de la tecnologia e innovacion. Soy una persona
                    capaz de desempeñar con éxito las tareas que me
                    han sido encomendadas de acuerdo con mi
                    experiencia laboral, sentido del deber y proactividad.
                    Lo que me permite desempeñar mis funciones de la
                    mejor manera.
                    <hr>
                    <client-only>
                        <v-icon name="CoGithub " />
                        <v-icon name="ri-zhihu-fill" />
                        <v-icon name="fa-CoGithub" />
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
    border-bottom: 2px black inset;
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