<template>
    <div class="row">
        <nav  class="col-xs-3" style="height: 600px">
            <Panel  title='骨干师资' more='#' >
                <Conveyor  :datas='members' column='true' />
            </Panel>
        </nav>
        <section class="col-xs-9">
            <Panel title='团队简介' more='#'>
                <Article :article='article' />
            </Panel>
        </section>
    </div>
</template>

<script>
    import Panel from '@/components/Panel.vue'
    import Conveyor from "@/components/Conveyor.vue";
    import Article from "@/components/Article.vue";

    export default {
        name: 'teachers',
        data() {
            return {
                article: {
                    paragraph: [
                        '建筑工程技术专业教学团队成立于2007年，以满足广东省及珠江三角洲区域经济发展对复合型、发展型建筑施工类技术技能人才培养的需求。目前，教学团队由学校专任教师（34人，占60.7%）和行业企业骨干兼职教师（22人，占39.3%）两部分组成。专任教师中，教授4人、副教授/高工11人，占专任教师的44.1%；讲师/工程师15人，占专任教师的44.1%；博士、硕士共计15人，占专任教师的44.1%；“双师”教师28人，占专任教师的82.4%。',
                        '本专业团队勇于创新，近年来获得多项各级教学改革、科研成果奖。其中，国家级教学成果奖二等奖1项、省级教学成果奖一等奖1项、二等奖2项，广州市高等学校优秀教学成果奖一等奖2项、二等奖1项；国家科学技术最佳成果进步奖二等奖1项、省科技进步奖二等奖1项、三等奖1项，中国铁道学会科学技术三等奖1项，院级教学成果奖一等奖4项。本专业团队近三年来，先后承担了中央财政支持的实训基地建设、省级重点建设专业、省级实训基地（含大学生实践教学基地）建设、省级民办教育专项资金支持项目、省级精品资源共享课程等的建设工作。'
                    ],
                    img: [{
                        src: require('@/assets/a11.jpg'),
                        alt: 'a11.jpg'
                    }, ],
                },
                members: [{
                        avatar: require('@/assets/a12.jpg'),
                        name: '李老师',
                        overview: '李老师 岩土工程博士/在站博士后，副教授，高级技师，南粤优秀教师，城建教学名师，',
                    }, {
                        avatar: require('@/assets/a13.jpg'),
                        name: '邹老师',
                        overview: '邹泽忠 毕业于清华大学工业与民用建筑专业，高级工程师、水电部注册监理工程师。',
                    },
                    {
                        avatar: require('@/assets/a14.jpg'),
                        name: '邹老师',
                        overview: '邹泽忠 毕业于清华大学工业与民用建筑专业，高级工程师、水电部注册监理工程师。',
                    },
                ],
            }
        },
        components: {
            Panel,
            Conveyor,
            Article,
        },
    }
</script>

<style scoped>

    .teacher-top {
        display: flex;
        flex-flow: row;
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