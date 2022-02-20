function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

async function getAMA() {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Getting AMAs from medium",
        }),
    };
    const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@CryptoChallengers",
        requestOptions
    );
    const data = await response.json();

    return data;
}

function createAMACard(data) {
    console.log(data);
    if (!data) return null;
    let parsedtitle = data.title.split(/\n/);
    let title = parsedtitle[0].split(":");
    title = title[1];
    let date = "";

    if (parsedtitle[2] == undefined) {
        (date = ""), (title = "");
    } else {
        date = parsedtitle[2].split(":");
        date = date[1];
    }
    const card = `
            <div class="card">
                <a href="${data.link}">
                        <img
                            src=${data.thumbnail}
                            alt=${data.title}
                            loading="lazy"
                        />
                        <h3>${title}</h3>
                        <h4>${date}</h4>
                </a>
            </div>
        `;
    return card;
}
async function renderAMAs() {
    const amas = (await getAMA()).items;
    let innerHTML = amas.reduce((prev, a) => prev + createAMACard(a), "");
    document.getElementById("amas").innerHTML = `<div class="sec3">
            <div class="cards">
                <div class="container1" id="amas_container1">
                    ${innerHTML}  
                </div>
            </div>
            <div class="inmedium">
                    <a href="https://medium.com/feed/@CryptoChallengers">
                        <button>View More<i class="fas fa-angle-right"></i></button>
                    </a>
                </div>                  
        </div>`;
}

ready(function () {
    renderAMAs();
});
