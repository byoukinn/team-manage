<template>
    <div class="row teacher-top">
        <nav  class="col-xs-3" style="height: 600px">
            <Panel  title='骨干师资' more='#' >
                <Conveyor column='true'>
                    <Conveyor-Col v-for="(m, i) in members" :key="m.id" :data="m" value="m.id" :index="i" @mousedownindex="replaceMember"></Conveyor-Col> 
                </Conveyor>
            </Panel>
        </nav>
        <section class="col-xs-9">
            <Panel title='团队简介' more='#'>
                <Article :article='currentMember.article' />
            </Panel>
        </section>
    </div>
</template>

<script>
    import Panel from '@/components/Panel.vue'
    import Conveyor from "@/components/Conveyor.vue";
    import ConveyorCol from '@/components/Conveyor/ConveyorCol.vue'

    import Article from "@/components/Article.vue";
    import pool from "@/config.js";

    export default {
        name: 'teachers',
        data() {
            var data = pool.teacherData()
            data['currentMember'] = data['members'][0]
            return data
        },
        methods: {
            replaceMember(index) {
                this.currentMember = this.members[index]
                console.log('currentMember', index, this.currentMember)
            },
        },
        components: {
            Panel,
            Conveyor,
            ConveyorCol,
            Article,
        },
    }
</script>

<style scoped>

    .teacher-top {
        margin: 15px auto;
    }

    .teacher-top>section {
        padding-left: 0px;
    }

    p {
        text-indent: 2em;
    }

    nav {
        width: 30%;
    }

    section {
        width: 70%;
    }

    nav,
    section,
    .teacher,
    .right-outer {
        display: flex;
    }

    .teacher-conveyor-frame {
        height: 500px;
    }

    .intro-img-group {
        flex-flow: row;
        /* width: 100%; */
        align-items: flex-start;
    }
</style>