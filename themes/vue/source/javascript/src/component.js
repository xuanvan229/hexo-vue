Vue.component('submenu', {
  props: ['subsubmenu'],
  template: '<li><a v-bind:href="submenu.link">{{submenu.title}}</a></li>'
})
Vue.component('submenu-ul', {
  props: ['submenu'],
  template: '<li class="second-menu"><a v-bind:href="submenu.link" v-bind:class="[submenu.class]">{{submenu.title}}</a><ul class="last-menu" v-if="submenu.ok"><li v-for="j in submenu.subtitle" :key= "j.id"><a v-bind:href="j.link" class="end-li">{{j.title}}</a></li></ul></li>'
})
var app = new Vue({
  el: '#header',
  data: {
    menu: [
      {title: 'ABOUT_US', link: '/',
        subtitle: [
          {title: 'About Van Lang IPA', link: '/2015/11/07/about-us', class: 'no-menu'},
          {title: 'Our Leadership', link: '/2015/11/07/leadership-team/', class: 'no-menu'},
          {title: 'Our Team', link: '/2015/11/07/leadership-team/', class: 'no-menu'}
        ]},
      {title: 'FOR PROVIDERS', link: '/',
        subtitle: [
          {title: 'Claims', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'How to create a claim batch in eCW for VLIPA', link:'/2015/11/07/guide/how-to-create-a-claim-batch-in-ecw-for-vlipa/'},
            {title: 'How to setup paper claim in Athena', link: '/2015/11/07/guide/how-to-set-up-paper-claims-in-athena/'},
            {title: 'Setup VLIPA as a favourite in Athena', link:'/2015/11/07/guide/set-up-van-lang-ipa-as-a-favorite-in-athena/'},
            {title: 'How to file claims', link: '/2015/11/07/guide/tips-on-how-to-file-claims/'}
          ]
        },
          {title: 'Prior Authorization', link: '/', class: "submenu", ok: 'ok',
          subtitle:[
            {title: 'RioTab Access Introduction', link: '/2015/11/14/prior-authorization/riotap-intro/'},
            {title: 'Authorization', link: '/2016/05/11/prior-authorization/authorization/'}
          ]
        },
          {title: 'Forms', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'Letter of Agreeement(LOA)', link: '/2015/11/14/forms/loa/'},
            {title: '(Credentialing) Pracititioner RIghts Notice', link: '/2015/11/14/forms/cred-practitioner-rights/'},
            {title: '(Credentialing) Texas Standard Credentialing', link: '/2015/11/14/forms/cred-tx-credentialing/'},
            {title: '(Credentialing) Business Associate Agreement', link: '/2015/11/14/forms/baa/'}
          ]
        },
          {title: 'HCC Coding', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'Risk Adjustment Documentation, Coding & Quality Toolbook', link: '/2015/11/14/hcc/risk-adjustment-toolbox/'},
            {title: 'ICD-9-CM Medicare Diagnosis Codes (Senior Patient, PCP)', link: '/2015/11/14/hcc/senior-patient/'},
            {title: 'ICD 10 - Internal Medicine', link: '/2015/11/14/hcc/icd10-internal-medicine/'},
            {title: 'Documenting and Coding Chronic Conditions Presentation (Sep-2015)', link: '/2015/11/14/hcc/coding-chronic-conditions/'},
            {title: 'General Coding Education', link: '/2015/11/14/hcc/general-coding-education/'}
          ]
        },
          {title: 'HEDIS / RAF', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'HEDIS Score Timeline', link: '/2015/11/14/hedis/score-timeline/'}
          ]
        },
          {title: 'Diabetes Management', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'IMPORTANT 2017 Coverage Changes for Diabetic Supplies', link: '/2017/01/05/diabetes-management/Coverage-for-diabetes-supply/'},
          ]
        },
          {title: 'Med Management', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'Amerigroup Drug Alternatives', link: '/2016/01/25/med-management/amerigroup-drug-alternatives/'}
          ]
        },
          {title: 'Video', link: '/', class: "submenu", ok: 'ok',
          subtitle: [
            {title: 'Early detection triples a patients chances of survival from crc', link: '/2015/11/07/video/early-detection-triples-a-patients-chances-of-survival-form-crc/'}
          ]
        },
          {title: 'TIFL Two-Factor Authentication Guide', link: '/', class: "no-menu"}
        ]
      },
      {title: 'PAYER BENEFITS', link: '/',
        subtitle: [
          {title: 'Summary of Benefits for Amerivantage Dual Coordination (HMO SNP)', link: '/2017/01/05/payer-benefits/2017-benefits-specialty/'},
          {title: 'Summary of Benefits for Amerivantage Classic (HMO) and Amerivantage Select (HMO)', link: '/2016/01/06/payer-benefits/benefits_classic_and_select_2016/'}
        ]
      },
      {title: 'DRUG FORMULARY', link: '/',
        subtitle: [
          {title: 'Amerivantage Specialty', link: '/2017/01/05/drug-formulary/2017-amerivantage-specialty-formulary/'},
          {title: 'Amerivantage Select', link: '/2017/01/05/drug-formulary/2017-amerivantage-select-formulary/'},
          {title: 'Amerivantage Classic', link: '/2017/01/05/drug-formulary/2017-amerivantage-classic-formulary/'},
          {title: '2017 Over-the-Counter Health Products Catalog', link: '/2017/01/05/drug-formulary/Amerigroup_OTC_Catalog_2017/'},
          {title: 'Walmart $4 drug list', link: '/2017/04/05/drug-formulary/Walmart_usd4_drug_list/'},
          {title: 'Our Team', link: '/', class: 'submenu', ok: 'ok',
          subtitle: [
            {title: 'Medicaid Preferred Drug List 2016',link: '/2017/04/05/medicaid-formulary/medicaid-preferred-drug-list-2016/'}
          ]
        }
        ]
      },
      {title: 'CONTACT', link: '/',
        subtitle: [
          {title: 'Join Van Lang IPA', link: '/2015/11/07/join-vlipa/'}
        ]
      }
    ]
    }
  })
