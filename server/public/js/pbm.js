function genBanner() {
    // TODO: fetch this information from back-end
    var banner_link = document.createElement('a');
    banner_link.title = "Banner Title";
    banner_link.href = "/bc/666";
    var banner_image = document.createElement('img');
    banner_image.src = "/b/lb";
    banner_image.width = "728";
    banner_image.height = "90";
    banner_link.appendChild(banner_image);

    return banner_link;
}

function displayBanners() {

    var element = document.getElementById("lbbanner");
    element.appendChild(genBanner());

    var element2 = document.getElementById("lbbanner-2");
    element2.appendChild(genBanner());
}