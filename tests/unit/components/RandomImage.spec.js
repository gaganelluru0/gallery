import { shallowMount} from '@vue/test-utils'

import RandomImage from './../../../src/components/RandomImage.vue'

describe("In RandomImage Component",()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(RandomImage,{
            data(){
                return{
                    imageUrl:"https://picsum.photos/600" 
                }
            }
        });

    });
    afterEach(()=>{
        wrapper.destroy();
    })
    it('is a Vue instance',()=>{
        expect(wrapper.isVueInstance).toBeTruthy();
    })
})