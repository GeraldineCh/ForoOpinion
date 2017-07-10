'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(createTheme());
    wrapper.append(themeList());

    root.append(wrapper);
};

const state = {
    //url: Header,
    data : null
};


$( _ => {

    getJSON('https://examen-laboratoria-sprint-5.herokuapp.com/topics', (err, json) => {

        if (err) { return alert(err.message);}

        state.data = json;
        console.log(state.data);

        const root = $('#root');
        render(root);
    });

});
