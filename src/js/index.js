import Search from "./models/Search";

const state = {};

//controlSEarch for ...
const controlSearch = async () => {
    const query = 'pizza';

    if (query) {
        //New search Object and save in state
        state.search = new Search(query);

        //prepare UI

        //search Action
        await state.search.getResults();

        console.log(state.search.result);
    }
}
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});