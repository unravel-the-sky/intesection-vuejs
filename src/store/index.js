import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    observer: new IntersectionObserver(handleIntersection),
    itemsInDisplay: [],
    itemsInDisplayAsSet: new Set()
}

const getters = {
    itemsInDisplay: state => {
        return state.itemsInDisplay
    }
}

const mutations = {
    updateBoxStatusId(state, id) {
        state.boxStatusId = id

        const boxStatus = document.getElementById(id);
        if (boxStatus) state.observer.observe(boxStatus);
    }
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            state.itemsInDisplayAsSet.add(entry.target.id)
        }
    });
    state.itemsInDisplay = Array.from(state.itemsInDisplayAsSet)
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})