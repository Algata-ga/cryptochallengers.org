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
    const card = `<div class="col-12 col-md-6 col-lg-6 col-xl-3 ">
            <div class="card older">
                <a href="${data.link}">
                    <div class="old-img">
                        <img
                            class="img-fluid"
                            src=${data.thumbnail}
                            alt=${data.title}
                            loading="lazy"
                        />
                    </div>
                    <div class="old-content">
                        <h3>${title}</h3>
                        <h3>${date}</h3>
                    </div>
                </a>
            </div>
        </div>`;
    return card;
}
async function renderAMAs() {
    const amas = (await getAMA()).items;
    let innerHTML = "";

    for (let i = 0; i < 8; i = i + 4) {
        innerHTML = innerHTML + `<div class="row">`;
        const row =
            createAMACard(amas[i]) +
            createAMACard(amas[i + 1]) +
            createAMACard(amas[i + 2]) +
            createAMACard(amas[i + 3]);
        innerHTML = innerHTML + row + `</div>`;
    }
    innerHTML = innerHTML + `<div class="row">`;
    const row = createAMACard(amas[8]) + createAMACard(amas[9]);
    innerHTML = innerHTML + row + `</div>`;

    document.getElementById("amas").innerHTML = `<section class="wrapper">
                <div class="cards">
                    <div class="container">${innerHTML}</div>
                </div>
            </section>`;
}

ready(function () {
    renderAMAs();
});
