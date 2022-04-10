    const showList = (tagName) => {
      results.innerHTML = "";
      dataku.data_post
        .filter((item) => {
          return item.tags.toLowerCase().includes(tagName);
        })
        .filter((item) => {
          return item.judul.toLowerCase().includes(search_term);
        })
        .forEach((e) => {
          const li = document.createElement("li");
          li.innerHTML = `<a class="${e.tags}" href="${e.link}">${e.judul}</a>`;
          results.appendChild(li);
        });
    };
