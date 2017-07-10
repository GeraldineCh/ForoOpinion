const themeList = () => {
    const container = $('<div class="container"></div>');
    
    jQuery.each(state.data, (i,val)  => {
        container.append('<div></div>');  
        container.children().eq(i).append(`<p>${val.content}</p>`); 
        container.children().eq(i).append(`<p>- Por: ${val.author_name}</p>`);

        container.children().eq(i).append(`<span>Respuestas: ${val.responses_count}</span><hr>`)
        //console.log(val.author_name.length);
    });
    return container;
};