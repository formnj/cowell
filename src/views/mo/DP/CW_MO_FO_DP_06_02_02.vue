<template>
    <div class="gnb">
        <ul>
            <li v-for="(item, index) in globalMenu" :key="index">
                <a href="">{{ item.title }}</a>
                <button @click.prevent="onToggleCheckCategory($event)">열림</button>
                <ul>
                    <li v-for="(item, index) in item.child" :key="index">
                        <a href="">{{ item.title }}</a>
                        <button @click.prevent="onToggleCheckCategory($event)">열림</button>
                        <ul>
                            <li v-for="(item, index) in item.child" :key="index">
                                <a href="">{{ item.title }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {},
    data(){
        return {
            globalMenu: [
                // BEST
                {
                    title: 'BEST',
                    child: [
                        {
                            title: 'UNDERWEAR',
                            child: [
                                { title: '남성' },
                                { title: '여성' },
                            ]
                        },
                        {
                            title: 'MEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '잡화' },
                                { title: '세트' },
                            ]
                        },
                        {
                            title: 'WOMEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '잡화' },
                                { title: '세트' },
                            ]
                        },
                        {
                            title: 'KIDS',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트' },
                                { title: '언더웨어' },
                            ]
                        },
                        {
                            title: 'OUTLET',
                            child: [
                                { title: '남성' },
                                { title: '여성' },
                                { title: '키즈' },
                            ]
                        },
                    ]
                },
                // UNDERWEAR
                {
                    title: 'UNDERWEAR',
                    child: [
                        {
                            title: '남성',
                            child: [
                                { title: '드로즈' },
                                { title: '트렁크' },
                                { title: '세트' },
                                { title: '런닝/티' },
                                { title: '베이스레이어' },
                                { title: '히트웨어' },
                                { title: '홈웨어' },
                            ]
                        },
                        {
                            title: '여성',
                            child: [
                                { title: '브라' },
                                { title: '팬티' },
                                { title: '세트' },
                                { title: '브라탑' },
                                { title: '레깅스' },
                                { title: '베이스레이어' },
                                { title: '히트웨어' },
                                { title: '홈웨어' },
                            ]
                        },
                    ]
                },
                // MEN
                {
                    title: 'MEN',
                    child: [
                        {
                            title: '아우터',
                            child: [
                                { title: '자켓' },
                                { title: '점퍼' },
                                { title: '코트' },
                                { title: '패딩' },
                                { title: '베스트' },
                            ]
                        },
                        {
                            title: '상의',
                            child: [
                                { title: '긴팔 티셔츠' },
                                { title: '반팔 티셔츠' },
                                { title: '맨투맨' },
                                { title: '후드' },
                                { title: '셔츠' },
                                { title: '니트' },
                            ]
                        },
                        {
                            title: '하의',
                            child: [
                                { title: '긴바지' },
                                { title: '스웻팬츠' },
                                { title: '데님' },
                                { title: '반바지' },
                            ]
                        },
                        {
                            title: '세트웨어',
                            child: [
                                { title: '전상품' },
                            ]
                        },
                        {
                            title: '패션잡화',
                            child: [
                                { title: '스니커즈' },
                                { title: '방한화' },
                                { title: '골프화' },
                                { title: 'ETC' },
                            ]
                        },
                    ]
                },
                // WOMEN
                {
                    title: 'WOMEN',
                    child: [
                        {
                            title: '아우터',
                            child: [
                                { title: '자켓' },
                                { title: '점퍼' },
                                { title: '코트' },
                                { title: '패딩' },
                                { title: '베스트' },
                            ]
                        },
                        {
                            title: '상의',
                            child: [
                                { title: '긴팔 티셔츠' },
                                { title: '반팔 티셔츠' },
                                { title: '맨투맨' },
                                { title: '후드' },
                                { title: '셔츠' },
                                { title: '니트' },
                            ]
                        },
                        {
                            title: '하의',
                            child: [
                                { title: '긴바지' },
                                { title: '스웻팬츠' },
                                { title: '데님' },
                                { title: '반바지' },
                                { title: '스커트' },
                                { title: '레깅스' },
                            ]
                        },
                        {
                            title: '세트웨어',
                            child: [
                                { title: '전상품' },
                            ]
                        },
                        {
                            title: '패션잡화',
                            child: [
                                { title: '스니커즈' },
                                { title: '방한화' },
                                { title: '골프화' },
                                { title: 'ETC' },
                            ]
                        },
                    ]
                },
                // KIDS
                {
                    title: 'KIDS',
                    child: [
                        {
                            title: '아우터',
                            child: [
                                { title: '자켓' },
                                { title: '점퍼' },
                                { title: '코트' },
                                { title: '패딩' },
                                { title: '베스트' },
                            ]
                        },
                        {
                            title: '상의',
                            child: [
                                { title: '긴팔 티셔츠' },
                                { title: '반팔 티셔츠' },
                                { title: '맨투맨' },
                                { title: '후드' },
                                { title: '셔츠' },
                                { title: '니트' },
                            ]
                        },
                        {
                            title: '하의',
                            child: [
                                { title: '긴바지' },
                                { title: '스웻팬츠' },
                                { title: '반바지' },
                                { title: '스커트' },
                                { title: '레깅스' },
                            ]
                        },
                        {
                            title: '세트웨어',
                            child: [
                                { title: '전상품' },
                            ]
                        },
                        {
                            title: '언더웨어',
                            child: [
                                { title: '팬티' },
                                { title: '히트웨어' },
                                { title: '아우터' },
                            ]
                        },
                    ]
                },
                // OUTLET
                {
                    title: 'OUTLET',
                    child: [
                        {
                            title: 'MEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트웨어' },
                                { title: '패션잡화' },
                            ]
                        },
                        {
                            title: 'WOMEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트웨어' },
                                { title: '패션잡화' },
                            ]
                        },
                        {
                            title: 'KIDS',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트웨어' },
                            ]
                        },
                    ]
                },
            ],
        }
    },
    methods: {
        onToggleCheckCategory (event) {
            event.currentTarget.classList.toggle('active')
        },
        closeGlobalMenu () {
            const gnb = document.getElementById('gnb')
            gnb.classList.remove('active')
            gnb.scrollTo(0, 0)
        },
    },
};
</script>

<style scoped>
</style>