import { shallowMount} from '@vue/test-utils'
import PageNotFound from './../../../src/components/PageNotFound.vue'

describe("In PageNotFound Component",()=>{
    let wrapper;
    beforeEach(()=>{

        wrapper=shallowMount(PageNotFound,{
            data(){
                return{
                    errorMessage:"Page Not Found"  
                }
            }
        });
    })
    afterEach(()=>{
        wrapper.destroy()
    })

    it('is a Vue instance',()=>{
        expect(wrapper.isVueInstance).toBeTruthy();
    })
})