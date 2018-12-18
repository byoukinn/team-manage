<template>
    <div>
        <div class="row home-content">
            <Sidebar class="sidebar" />
            <Panel :title="title" class="showbox">
                <Article :article="article" />
            </Panel>
        </div>
        <div class="row conveyor">
            <Panel :title="conveyor" class="col-xs-3 col-lg-12 col-lg-offset-1">
                <Conveyor :column="false" :datas="conveyorData" />
            </Panel>
        </div>
    </div>
</template>

<script>
    import Article from '@/components/Article.vue'
    // @ is an alias to /src
    import Panel from '@/components/Panel.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Conveyor from '@/components/Conveyor.vue'

    export default {
        name: 'home',
        data() {
            return {
                title: '| 成果简介',
                article: {
                    title: '',
                    paragraph: [
                        '高职院校学生第二课堂缺乏系统设计和有效管理，未能发挥应有效能。据此，根据技术技能人才成长规律，提出学生第二课堂组织和运行管理方案：①按照“项目分级实施、能力层层递进”的原则，建立高职院校学生项目组分层管理模型，搭建CSC（Community-Studio-Company）育人平台，形成由专业社团、工作室、创业公司构成的三层递进的金字塔型平台架构；②在CSC育人平台上，通过“任务导向，项目驱动”方式运作教学项目、竞赛项目和真实项目，实现与教学课堂的协调融通。',
                        '2011年，成果开始实施，计算机系依据CSC育人平台架构，形成三级指导教师团队和三级学生团队体系，设计教学项目集、竞赛项目集，健全保障机制，构建ITeam基地，开展了一系列学生专业技能实践和创新创业活动。2015年，CSC平台模型在艺术系推广，建立King创艺社。CSC育人平台为师生沟通、学生技能培训和校企合作提供了重要途径，为更多学生提供实践机会和技能提升通道，是提高学生综合素质的重要途径。',
                        '6年的实践证明，CSC育人平台满足高职学生技能成长与职业发展需要，累计受益学生5000名左右，毕业生起薪平均增长13%，专业对口率提升21%。公开发表教改论文20多篇，登记软件著作权12件、专利8件，国家级、省级学生职业技能竞赛获奖800余项，完成各类社会服务项目40多项，孵化20多个学生创业公司，50余个项目被确定为省级、院级项目，获省级以上教学奖励与荣誉100余项。专业建设成效显著，多个专业被立项为省一流院校重点建设专业、省二类品牌建设专业、省重点建设专业等。',
                        '成果形成、实践、推广的完整过程如图所示。',

                    ],
                },
                conveyor: '| 图片展示',
                conveyorData: [{
                        img: require("@/assets/cloud.png"),
                        desc: 'hello',
                    },
                    {
                        img: require("@/assets/cloud.png"),
                        desc: 'xxx',
                    },
                    {
                        img: require("@/assets/cloud.png"),
                        desc: 'qqq',
                    },
                    {
                        img: require("@/assets/cloud.png"),
                        desc: 'www',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'eee',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'rrr',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'tttt',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'yyyy',
                    },
                    {
                        img: require("@/assets/logo.png"),
                        desc: 'uuuu',
                    },
                ],
            }
        },
        components: {
            Sidebar,
            Conveyor,
            Panel,
            Article,
        }
    }
</script>

<style scoped>
    .home {
        overflow: hidden;
    }

    .home-content,
    .conveyor {
        display: flex;
        margin: 10px auto;
        width: inherit;
    }

    .sidebar {
        min-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 10px;
    }

</style>