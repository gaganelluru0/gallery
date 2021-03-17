import {shallowMount,createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '../../src/App.vue'
import BootstrapVue from 'bootstrap-vue'

describe('In App Component',()=>{
    let wrapper;
    const router=new VueRouter([
        {
          path:'/',
          name:"ImageList",
          
         
        },
        {
         path:'/select/:id',
         name:"SelectedImage",
         
         props:true,
         
       },
        
        {
         path:'/random',
         name:"RandomImage",
         
        },
        {
          path:'/:catchAll(.*)',
          name:"NotFound",
          
        }
      ])
      beforeEach(()=>{
     const localVue=createLocalVue();
     localVue.use(VueRouter);
     localVue.use(BootstrapVue)
     wrapper=shallowMount(App,{localVue,router,})
      });

      afterEach(()=>{
          wrapper.destroy();
      })

      it('is a Vue instance',()=>{
          expect(wrapper.isVueInstance).toBeTruthy();
      })
      it('renders the correct markup',()=>{
          expect(wrapper.html()).toContain('<div id="app">');
      })
      it('it should have a div element with id="app',()=>{
          expect(wrapper.attributes('id')).toBe("app");
      })
})