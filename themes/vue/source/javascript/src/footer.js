Vue.component('banner',{
  props: ['item'],
  template: '<li v-bind:class="[item.class]"><h2>{{item.title}}</h2><a v-bind:href="item.link">{{item.subtitle}}</a></li>'
})
Vue.component('social', {
  props: ['item'],
  template: '<li v-bind:class="[item.class]"><a v-bind:href="item.link"></a></li>'
})
Vue.component('contact',{
  props: ['item'],
  template: '<div class="contact-line"><strong>{{item.title}}</strong><h4 v-if="item.h4">{{item.content}}</h4><span v-if="item.span">{{item.content}}</span><a v-if="item.link" v-bind:href="item.link">{{item.content}}</a></div>'
})
var footer = new Vue({
  el: "#footer",
  data: {
    banner: [
      {class: 'footer_banner_item item_left', title: 'Collaboration', link: '/2015/11/07/about-us/', subtitle: 'Click to know more'},
      {class: 'footer_banner_item item_center', title: 'Innovation', link: '/2015/11/07/about-us/', subtitle: 'Click to know more'},
      {class: 'footer_banner_item item_right', title: 'Technology', link: '/2015/11/07/about-us/', subtitle: 'Click to know more'}
    ],
    footerbox: {
      title: 'Van Lang IPA',
      content: 'Van Lang IPA, an independent physician association founded by primary care physicians, is a physician led organization. We engage with high quality primary care physicians, specialists, hospital systems and ancillary services that share our mission to provide superior care through innovation, technology and collaboration.'
    },
    socialicon: [
      {class: 'facebook', link: '/'},
      {class: 'twitter', link: '/'},
      {class: 'google', link: '/'},
      {class: 'email', link: '/'}
    ],
    contact: [
      {title: '', content: 'Van Lang IPA', h4: true},
      {title: 'Phone', content: '(626) 656-2370 [Main Tel.]', span: true},
      {title: 'Phone', content: '(800) 403-6495 [Utilization Mgmt.]', span: true},
      {title: 'Email', content: 'jeff.ngo@vanlangipa.com', link: 'mailto:jeff.ngo@vanlangipa.com'}
    ]
  }
})
