<nav>
    <ul>
        <li class="current"><!-- 활성화 메뉴에 current 클래스 추가 -->
            <router-link to="">베스트</router-link>
        </li>
        <li>
            <router-link to="">언더웨어</router-link>
            <div class="depth_2">

                <!-- brand swiper -->
                <div class="gnb_swiper_wrap">
                    <!-- <ul class="swiper-wrapper"><li class="swiper-slide" v-for="(item, index) in gnb_brand_1" :key="index">
                        <span class="thumb">
                            <em><img :src="item.img" /></em>
                        </span>
                    </li></ul>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> -->
                </div>
                <!-- //brand swiper -->

                <div class="menu_wrap">
                    <dl>
                        <dt><router-link to="">남성</router-link></dt>
                        <dd>
                            <ul>
                                <li><router-link to="">드로즈</router-link></li>
                                <li><router-link to="">트렁크</router-link></li>
                                <li><router-link to="">세트</router-link></li>
                                <li><router-link to="">런닝/티</router-link></li>
                                <li><router-link to="">베이스레이어</router-link></li>
                                <li><router-link to="">히트웨어</router-link></li>
                                <li><router-link to="">홈웨어</router-link></li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt><router-link to="">여성</router-link></dt>
                        <dd>
                            <ul>
                                <li><router-link to="">브라</router-link></li>
                                <li><router-link to="">팬티</router-link></li>
                                <li><router-link to="">세트</router-link></li>
                                <li><router-link to="">브라탑</router-link></li>
                                <li><router-link to="">레깅스</router-link></li>
                                <li><router-link to="">베이스레이어</router-link></li>
                                <li><router-link to="">히트웨어</router-link></li>
                                <li><router-link to="">홈웨어</router-link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
        <li>
            <router-link to="">남성</router-link>
            <div class="depth_2">

                <!-- brand swiper -->
                <div class="gnb_swiper_wrap">
                    <ul class="swiper-wrapper"><li class="swiper-slide" v-for="(item, index) in gnb_brand_2" :key="index">
                        <span class="thumb">
                            <em><img :src="item.img" /></em>
                        </span>
                    </li></ul>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <!-- //brand swiper -->

                <div class="menu_wrap">
                    <dl>
                        <dt><router-link to="">depth-2</router-link></dt>
                        <dd>
                            <ul>
                                <li><router-link to="">depth-3</router-link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
        <li>
            <router-link to="">여성</router-link>
            <div class="depth_2">
                <div class="menu_wrap">
                    <dl>
                        <dt><router-link to="">depth-2</router-link></dt>
                        <dd>
                            <ul>
                                <li><router-link to="">depth-3</router-link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>                                
            </div>
        </li>
        <li>
            <router-link to="">키즈</router-link>
            <div class="depth_2">
                <div class="menu_wrap">
                    <dl>
                        <dt><router-link to="">depth-2</router-link></dt>
                        <dd>
                            <ul>
                                <li><router-link to="">depth-3</router-link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
        <li>
            <router-link to="">아울렛</router-link>
            <div class="depth_2">
                <div class="menu_wrap">
                    <dl>
                        <dt><router-link to="">depth-2</router-link></dt>
                        <dd>
                            <ul>
                                <li><router-link to="">depth-3</router-link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
    </ul>
    <router-link to="">기획전</router-link>
    <router-link to="">이벤트</router-link>
</nav>