<style scoped>
.cont__timeline{
    background: linear-gradient(to right, rgb(43, 75, 255), rgb(252, 62, 62));
    color: white;
}
.cont__timeline h2{
    text-align: center;
}   
</style>
<template>
    <div class="cont__timeline">
        <h2>Mi Línea de Tiempo</h2>
        <Timeline :items="timelineItems" />
    </div>
</template>
<script>
import Timeline from "./Timeline.vue";

export default {
    components: {
        Timeline
    },
    data() {
        return {
            timelineItems: [
                {
                    title: "Tecnico Superior en Informatica",
                    description: "Obtuve mi titulo de tecnico superior en informatica, luego de realizar un proyecto sociotecnologico en una institucion educativa",
                    date: "2020-04-30"
                },
                {
                    title: "Soporte Tecnico Departamento Informatica",
                    description: "Me hice parte del equipo de desarrollo y soporte tecnico de la acaldia Angostrua del Orinoco en Venezuela ciudad Bolivar, estado Bolivar",
                    date: "2021-12-16"
                },
                {
                    title: "Ingeniero En Informatica",
                    description: "Obtuve mi titulo de tecnico superior en informatica, luego de realizar un proyecto sociotecnologico en una institucion Gubernamental",
                    date: "2024-05-02"
                }
            ]
        };
    }
};
</script>