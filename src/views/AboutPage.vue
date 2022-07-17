<template>
<v-container>
    <div class="article mt-10 mb-10">
    <v-row>
        <v-spacer></v-spacer>
            <v-col cols="6" class="grey lighten-4 text-center rounded-lg heading">
                <p class="mt-3 text-h6">Hello, thank you for visiting the site.<br>
                I'm a web app developer based in Japan!</p>
            </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10" id="profile_locate">
        <v-spacer></v-spacer>
        <v-col cols="4" class="text-left">
            <h1 class="myname">Keito Shitara</h1>
            <p class="text-h6">(Developer)</p>
            <p class="text-h6 mt-3">
            I'm a web developer in Tokyo.<br>
            This is my self-introduction site, made with Vue.js and Vuetify.</p>
        </v-col>
        <v-col cols="2" class="mt-2"><img class="profile_img rounded-circle" src="../assets/Profile_Image.jpg" alt="プロフィール画像"></v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10" id="work_locate">
        <v-spacer></v-spacer>
        <v-col cols="6" class="work">
            <h2 class="pl-2">Work</h2>
            <p class="mt-2 font-weight-medium">&emsp;I'm an full-stack developer based in Tokyo with a passion for building digital services he wants.<br>
            I'm a fledgling developer who has just joined an in-house development company, and in the past I have built systems for e-commerce sites.<br>
            I'm now developing SEO analysis tools in-house, and I'm learning every day to catch up on my development work.<br>
            In my private life, I am active mainly in web production and development.</p>
            <v-btn><router-link to="/works" class="text-decoration-none black--text">Works</router-link></v-btn>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10" id="background_locate">
        <v-spacer></v-spacer>
        <v-col cols="6" class="bio">
            <h2 class="pl-2">Background</h2>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="2" class="bio-contents">
            <h3 class="pl-2">1996</h3>
        </v-col>
        <v-col cols="4">
            <p class="mt-1">Born in Nagoya(名古屋), Japan</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-0">
        <v-spacer></v-spacer>
        <v-col cols="2" class="bio-contents">
            <h3 class="pl-2">2015</h3>
        </v-col>
        <v-col cols="4">
            <p class="mt-1">Graduated from Nagoya Institute of Technology with a Master's degree in Materials Science and Engineering.</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-0">
        <v-spacer></v-spacer>
        <v-col cols="2" class="bio-contents">
            <h3 class="pl-2">2019</h3>
        </v-col>
        <v-col cols="4">
            <p class="mt-1">Joined a Toyota Group company as a material developer</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-0">
        <v-spacer></v-spacer>
        <v-col cols="2" class="bio-contents">
            <h3 class="pl-2">2022</h3>
        </v-col>
        <v-col cols="4">
            <p class="mt-1">Worked as a web developer in the product development section of a company engaged in DM business.</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row id="likes_locate">
        <v-spacer></v-spacer>
        <v-col cols="6" class="likes">
            <h2 class="pl-2">Likes🖤</h2>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" class="like-contents">
            <p class="pl-2">Music, Web Development, Youtube, Commics, Anime, Apex, Movie, Japanese Chess</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row id="skill_locate">
        <v-spacer></v-spacer>
        <v-col cols="6" class="skill">
            <h2 class="pl-2">Skill</h2>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" class="skill-contents">
            <p class="pl-2">HTML, CSS, JavaScript, jQuery, Sass, Bootstrap, Vue.js, Nuxt.js, Vuetify, PHP, Laravel, WordPress</p>
            <p class="font-weight-medium">&emsp;I usually use PHP and Laravel for backend development at work, so PHP and Laravel web development is my specialty. <br>
            I also sometimes work on front-end development, in which case I mainly use Vue.js and Nuxt.js.</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row id="portofolio_locate">
        <v-spacer></v-spacer>
        <v-col cols="6" class="portofolio">
            <h2 class="pl-2">Website Production Portfolio</h2>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" class="portofolio-contents">
            <div class="portofolio-contents-heading">
            <h3 class="text-center">iSara</h3>
            </div>
            <div class="work-item">
            <a href="https://tarao96.github.io/iSara/"><img src="../assets/iSara.jpeg" alt="iSaraのwebページ"></a>
            <a href="https://tarao96.github.io/iSara/" class="caption">iSara模写</a>
            </div>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" class="portofolio-contents">
            <div class="portofolio-contents-heading">
            <h3 class="text-center">SEO Consulting</h3>
            </div>
            <div class="work-item">
            <a href="https://tarao96.github.io/Lancers/"><img src="../assets/Lancers.jpeg" alt="SEOのwebページ"></a>
            <a href="https://tarao96.github.io/Lancers/" class="caption">Lancers案件模写</a>
            </div>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" class="portofolio-contents">
            <div class="portofolio-contents-heading">
            <h3 class="text-center">LIKSON</h3>
            </div>
            <div class="work-item">
            <a href="https://tarao96.github.io/LIKSON/"><img src="../assets/LIKSON.png" alt="LIKSONのwebページ"></a>
            <a href="https://tarao96.github.io/LIKSON/" class="caption">LIKSON模写</a>
            </div>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row id="services_locate">
        <v-spacer></v-spacer>
        <v-col cols="6" class="services">
            <h2 class="pl-2">Services</h2>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10">
        <v-spacer></v-spacer>
        <v-col cols="2" class="grey lighten-4">
            <h3 class="pl-2"><v-icon class="mr-2">mdi-xml</v-icon>Coding</h3>
        </v-col>
        <v-col cols="4" class="grey lighten-4">
            <p class="mt-1 font-weight-medium">&emsp;I perform appropriate coding based on the design. 
            We also provide SEO-conscious coding that is compatible with responsive design.<br> 
            We also handle modifications appropriately.</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10">
        <v-spacer></v-spacer>
        <v-col cols="2" class="services-contents grey lighten-4">
            <h3 class="pl-2"><v-icon class="mr-2">mdi-wordpress</v-icon>WordPress</h3>
        </v-col>
        <v-col cols="4" class="grey lighten-4">
            <p class="mt-1 font-weight-medium">&emsp;We can install WordPress or convert your existing site to WordPress.<br> 
            Also, we can help you to customize the theme and set up forms, etc.</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10">
        <v-spacer></v-spacer>
        <v-col cols="3" class="services-contents grey lighten-4">
            <h3 class="pl-2"><v-icon class="mr-2">mdi-remote-desktop</v-icon>Web Development</h3>
        </v-col>
        <v-col cols="3" class="grey lighten-4">
            <p class="mt-1 font-weight-medium">&emsp;I can do web development programming.<br>
            The main development languages are PHP and JavaScript.<br>
            I am also proficient in Laravel and Vue.js as frameworks.</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    </div>
</v-container>
</template>

<script>
export default{
};
</script>

<style scoped>
.profile_img {
    width: 150px;
    height: 170px;
    border: 3px solid #fff;
}

.work > h2 {
    width: 80px;
    border-bottom: 2px solid black;
}

.bio > h2 {
    width: 150px;
    border-bottom: 2px solid black;
}

.likes > h2 {
    width: 100px;
    border-bottom: 2px solid black;
}

.skill > h2 {
    width: 70px;
    border-bottom: 2px solid black;
}

.portofolio > h2 {
    width: 330px;
    border-bottom: 2px solid black;
}

.portofolio-contents > .work-item > a > img {
    width: 40vw;
}

.portofolio-contents > .work-item {
    position: relative;
    overflow: hidden;
}

.caption {
    position:absolute;
    left:0;
    top: 350px;
    background-color: rgba(0, 0, 0, 0.6);
    color:#fff;
    padding: 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}

.services > h2 {
    width: 110px;
    border-bottom: 2px solid black;
}

</style>
