Vue.component('showbar',{
  props: ['item'],
  template: '<li class="show-bar-list"><h1 >{{item.text}}</h1></li>'
})
Vue.component('listboxright',{
  props: ['item'],
  template: '<li><a href="#">{{item.text}}</a></li>'
})
var slide = new Vue({
  el: '#slidermother',
  data: {
    msg: 'hello',
    showbar: [
      {text: 'COLLABORATION'},
      {text: 'INNOVATION'},
      {text: 'TECHNOLOGY'}
    ],
    titlecenterbox: {
        title1: 'Headlth Plan',
        title2: 'Join Van Lang IPA',
        title3: 'Common Forms'
    },
    contentcenterbox:{
        content1: 'Amerigroup is expanding Amerivantage Dual Coordination (HMO SNP). Which are primarily $0 premium plans with $0 copays for Medicare covered services.',
        content2: 'Van Lang IPA, an independent physician association founded by primary care physicians, is a physician led organization.'
    },
    CommonForms: [
      {text: 'Authorization Form'},
      {text: 'Business Associate Agreement (BAA)'},
      {text: 'Texas Standard Credentialing'}
    ]
  }
})
