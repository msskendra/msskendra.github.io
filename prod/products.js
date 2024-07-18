/**
Mahalaxmi Sheti Seva Kendra
*/

$(document).ready(function () {
    renderProducts(products);

    $('#search-box').keyup(function () { 
        searchProducts();
    });

    $('#main_logo').click(function () {
        location.reload();
    });
});

function renderProducts(items) {
    $("#products-div").html('');
    $.each(items, function(i, product) {
        var prodHtml = generateView(product);
        $("#products-div").append(prodHtml);
    });
}

function searchProducts() {
    var term = $('#search-box').val().toLowerCase().trim();
    
    var searched = [];
    if(term && term.length >= 3) {
        $.each(products, function(i, product) {
            if(product.name.search(term) != -1
            || product.desc.search(term) != -1
            || product.search_term.search(term) != -1) {
                searched.push(product);
            }
        });

        if(searched.length > 0) {
            renderProducts(searched);
        }
    } else if(!term) {
        renderProducts(products);
    }
}

function generateView(product) {
    var stock = product.stock;

    var html = "";
    html += '<div class="u-align-center u-container-style u-products-item u-repeater-item">';
    html += '<div class="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">';
    html += '<img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-product-control u-image-1" src="./prod/images/' + product.image + '">';
    html += '<div class="u-container-style u-group u-group-1">';
    html += '<div class="u-container-layout u-container-layout-2">';
    html += '<h4 class="u-align-left u-product-control u-text u-text-3">';
    html += '<a title="' + product.name + '" class="u-product-title-link">' + product.name + '</a>';
    html += '</h4>';
    html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-00">Company: ' + product.company + '</div>';
    html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-00">Categoty: ' + camelCase(product.category) + '</div>';
    //html += '<div class="u-align-left u-product-control u-product-price u-product-price-1"></div>';
    //html += '<div class="u-price-wrapper u-spacing-10"></div>';

    if(stock && stock == 'yes') {
        html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-00" style="color: green;font-weight: bold;">Stock available</div>';
    } else if(stock && stock == 'no') {
        html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-00" style="color: red;font-weight: bold;">Out of stock</div>';
    }

    html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-00">Price: ' + product.cash_price + ' / ' + product.unit + '</div>';
    //html += '</div>';
   //html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

function camelCase(str) {
    if(!str) {
        return str;
    }

    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toUpperCase() : word.toLowerCase();
    }).replace(/\s+/g, '');
}

var products = [
    {
        "code": "M00001",
        "name": "2-4-D 1L MAIN",
        "company": "ADAMA INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "34",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-2-4-D-Main-1L.png",
        "search_term": "2-4-d 1l main adama india ltdherbicide"
    },
    {
        "code": "M00002",
        "name": "2-4-D 1L krishi rasayan",
        "company": "KRISHI RASAYAN P.LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krishi rasayan kay-d 58 1L.png",
        "search_term": "2-4-d 1l krishi rasayan ltdherbicide"
    },
    {
        "code": "M00003",
        "name": "2-4-D 1L ZURA",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "atul-zura.png",
        "search_term": "2-4-d 1l zuaraatul ltdherbicide"
    },
    {
        "code": "M00004",
        "name": "adama paranex 1L",
        "company": "ADAMA INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-paranex.png",
        "search_term": "adama paranex 1L adama ltdherbicide"
    },
    {
        "code": "M00005",
        "name": "2-4-D 250ML MAIN ",
        "company": "ADAMA  INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-2-4-D-Main-1L.png",
        "search_term": "2-4-d 250ml main adama  india ltdherbicide"
    },
    {
        "code": "M00006",
        "name": "2-4-D 250ML ZURA  ",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "atul-zura.png",
        "search_term": "2.4.d 250 ml zura  atul ltdherbicide"
    },
    {
        "code": "M00007",
        "name": "2-4-D 400ML MAIN ",
        "company": "ADAMA  INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-2-4-D-Main-1L.png",
        "search_term": "2-4-d 400ml main adama  india ltdherbicide"
    },
    {
        "code": "M00008",
        "name": "2-4-D 500 GRAM POWDER SALIX",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "atul-salix.png",
        "search_term": "2-4d 500 gram powder salixatul ltdherbicide"
    },
    {
        "code": "M00009",
        "name": "COSAYR",
        "company": "ADAMA INDIA LTD",
        "category": "Insecticide",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "cosayr.png",
        "search_term": "cosayr adama india ltdinsecticide"
    },
    {
        "code": "M00010",
        "name": "ADRINO 100gm (METRIBUZIN 70WP)",
        "company": "SYNGENTA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adrino.png",
        "search_term": "adrino 100gm (metribuzin 70wp) syngenta ltdherbicide"
    },
    {
        "code": "M00011",
        "name": "AGADI 1KG",
        "company": "ADAMA  INDIA LTD",
        "category": "PESTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "agadi-1kg.png",
        "search_term": "agadi 1kgadama  india ltdpesticide"
    },
    {
        "code": "M00012",
        "name": "AGADI 5KG",
        "company": "ADAMA  INDIA LTD",
        "category": "PESTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "agadi-1kg.png",
        "search_term": "agadi 5kgadama  india ltdpesticide"
    },
    {
        "code": "M00013",
        "name": "ALIKA 40ml ",
        "company": "SYNGENTA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "alika.png",
        "search_term": "alika 40ml syngenta ltdinsecticide"
    },
    {
        "code": "M00014",
        "name": "ALIKA 80ml",
        "company": "SYNGENTA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "alika.png",
        "search_term": "alika 80mlsyngenta ltdinsecticide"
    },
    {
        "code": "M00015",
        "name": "AMNON 100gm",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "amnon.png",
        "search_term": "amnon 100gmadama  india ltdinsecticide"
    },
    {
        "code": "M00016",
        "name": "AMNON 50gm.",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "amnon.png",
        "search_term": "amnon 50 gm.adama  india ltdinsecticide"
    },
    {
        "code": "M00017",
        "name": "ANTH-50 250ML [CHLOROPYRIPHOS 50%EC]",
        "company": "KRISHI RASAYAN LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "anth-50.png",
        "search_term": "anth-50 250ml [chloropyriphos 50%ec]krishi rasayan p.ltdinsecticide"
    },
    {
        "code": "M00018",
        "name": "ANTH-50 500ML[CHLOROPYRIPHOS 50%EC]",
        "company": "KRISHI RASAYAN LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "anth-50.png",
        "search_term": "anth-50 500ml [chloropyriphos 50%ec]krishi rasayan p.ltdinsecticide"
    },
    {
        "code": "M00019",
        "name": "Anth-505 100Ml (CHORO50% + CYPER5%)",
        "company": "KRISHI RASAYAN LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "anth-505.png",
        "search_term": "anth-505 100ml (choro50% + cyper5%)krishi rasayan ltdinsecticide"
    },
    {
        "code": "M00020",
        "name": "ANTH-505 1L (CHORO50% + CYPER5%)",
        "company": "KRISHI RASAYAN LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "anth-505.png",
        "search_term": "anth 505 1l (choro50% + cyper5%)krishi rasayan ltdinsecticide"
    },
    {
        "code": "M00021",
        "name": "WIRAZER",
        "company": "ADAMA INDIA LTD",
        "category": "Herbicide",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "wirazer.png",
        "search_term": "wirazer adama india ltdherbicide"
    },
    {
        "code": "M00022",
        "name": "BENMAIN 100GM",
        "company": "ADAMA  INDIA LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-benmain.png",
        "search_term": "benmain 100gmadama  india ltdfungicide"
    },
    {
        "code": "M00023",
        "name": "BENMAIN 250GM",
        "company": "ADAMA  INDIA LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-benmain.png",
        "search_term": "benmain 250gmadama  india ltdfungicide"
    },
    {
        "code": "M00024",
        "name": "BENMAIN 500 GRM",
        "company": "ADAMA  INDIA LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-benmain.png",
        "search_term": "benmain 500 grmadama  india ltdfungicide"
    },
    {
        "code": "M00025",
        "name": "suckgan",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "suckgan.png",
        "search_term": "suckgan adama ltdinsectside"
    },
    {
        "code": "M00026",
        "name": "MAHADHAN 12:61:0 (1kg)",
        "company": "MAHADHAN AGROTECH LTD",
        "category": "Fertilizer",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "mahadhan-12-61-00.png",
        "search_term": "126100 mahadhan agrotech ltd fertilizer"
    },
    {
        "code": "M00027",
        "name": "Krizin (Metribuzan 70%wp)",
        "company": "KRISHI RASAYAN LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krizin.png",
        "search_term": "krizin metribuzan krishi rasayan ltdherbicide"
    }, 
    {
        "code": "M00028",
        "name": "spic cytoz 500ml",
        "company": "SPIC LTD",
        "category": "Fertilizer",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "spic-cytoz.png",
        "search_term": "spic cytoz 500ml spic ltdfertilizer"
    },
    {
        "code": "M00029",
        "name": "ATUL CYNO 15GM",
        "company": "ATUL LTD",
        "category": "Pesticide",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "atul-cyno-15gm.png",
        "search_term": "atul cyno 15gm atul ltdpesticide"
    },
    {
       "code": "M00030",
       "name": "tata metri 100gm",
       "company": "RALLIS INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "tata-metri-100gm.png",
       "search_term": "tata metri 100gm tata ltdherbicide"
    },
    {
       "code": "M00031",
       "name": "tata enzip 200ml",
       "company": "RALLIS INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "tata-enzip-200ml.png",
       "search_term": "tata metri 200ml tata ltdherbicide"
    },
    {
       "code": "M00031",
       "name": "tata contaf 100ml",
       "company": "RALLIS INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "tata-contaf-100ml.png",
       "search_term": "tata contaf 100ml tata ltdherbicide"
    },
    {
       "code": "M00032",
       "name": "adama paranex 250ml",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "adama-paranex.png",
       "search_term": "adama paranex 250ml adama ltdherbicide"
    },
    {
       "code": "M00033",
       "name": "adama paranex 500ml",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "adama-paranex.png",
       "search_term": "adama paranex 500ml adama ltdherbicide"
    },
    {
       "code": "M00034",
       "name": "atul plasto",
       "company": "ATUL LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "atul-plasto.png",
       "search_term": "atul plasto atul ltdherbicide"
    },
    {
       "code": "M00035",
       "name": "ANTH-505 500ml (CHORO50% + CYPER5%)",
       "company": "KRISHI RASAYAN LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "anth-505.png",
       "search_term": "anth-505 500ml (choro50% + cyper5%) krishi rasayan ltdherbicide"
    },
    {
       "code": "M00036",
       "name": "ADAMA DIUREX",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "adama-diurex.png",
       "search_term": "adama diurex adama india ltdherbicide"
    },
    {
       "code": "M00037",
       "name": "ADAMA TAMER 1KG",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "adama-tamar.png",
       "search_term": "adama tamer 1kg adama india ltdherbicide"
    },
    {
       "code": "M00037",
       "name": "ADAMA TAMER 500KG",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "adama-tamar.png",
       "search_term": "adama tamer 500kg adama india ltdherbicide"
    },
    {
       "code": "M00037",
       "name": "ADAMA TAMER 250KG",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "adama-tamar.png",
       "search_term": "adama tamer 250kg adama india ltdherbicide"
    },
    {
       "code": "M00038",
       "name": "MAHADHAN 13:40:13 (1KG)",
       "company": "MAHADHAN AGROTECH LTD",
       "category": "Fertilizer",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "mahadhan-13-40-13.jpg",
       "search_term": "mahadhan 13:40:13 mahadhan agrotech ltdherbicide"
    },
    {
       "code": "M00039",
       "name": "CYDUS 1L (PARAQUAT DICHLORIDE 24% SL)",
       "company": "ATUL LTD",
       "category": "HERBICIDE",
       "desc": "PARAQUAT DICHLORIDE 24% SL",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "cydus.png",
       "search_term": "atul cydus 1l (paraquat dichloride 24% sl) atul ltdherbicide"
    },
    {
       "code": "M00040",
       "name": "CYDUS 500ml (PARAQUAT DICHLORIDE 24% SL)",
       "company": "ATUL LTD",
       "category": "HERBICIDE",
       "desc": "PARAQUAT DICHLORIDE 24% SL",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "cydus.png",
       "search_term": "atul cydus 500ml (paraquat dichloride 24% sl) atul ltdherbicide"
    },
    {
       "code": "M00041",
       "name": "CYDUS 250ml (PARAQUAT DICHLORIDE 24% SL)",
       "company": "ATUL LTD",
       "category": "HERBICIDE",
       "desc": "PARAQUAT DICHLORIDE 24% SL",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "cydus.png",
       "search_term": "atul cydus 1l (paraquat dichloride 24% sl) atul ltdherbicide"
    },
    {
       "code": "M00042",
       "name": "EFFICAX 50ml",
       "company": "ATUL LTD",
       "category": "STICKER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "efficax.png",
       "search_term": "efficax 50ml atul ltdsticker"
    },
    {
       "code": "M00043",
       "name": "FLAMEBERGE",
       "company": "ADAMA INDIA LTD",
       "category": "PGR",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "flamberge.png",
       "search_term": "flameberge adama india ltdpgr"
    },
    {
       "code": "M00044",
       "name": "ANTRACOL",
       "company": "BAYER LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "antracol.png",
       "search_term": "antracol bayer ltdfungicide"
    }, 
    {
       "code": "M00045",
       "name": "CONFIDOR 50ml",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "confidor.png",
       "search_term": "confidor 50ml bayer ltdinsecticide"
    },
    {
       "code": "M00046",
       "name": "CONFIDOR 100ml",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "confidor.png",
       "search_term": "confidor 100ml bayer ltdinsecticide"
    },
    {
       "code": "M00047",
       "name": "DECIS 100 50ml",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "decis 100.png",
       "search_term": "decis 100 50ml bayer ltdinsecticide"
    },
    {
       "code": "M00048",
       "name": "DECIS 100 100ml",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "decis 100.png",
       "search_term": "decis 100 100ml bayer ltdinsecticide"
    }, 
    {
       "code": "M00049",
       "name": "JUMP 2gm",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "jump.png",
       "search_term": "jump 2gm bayer ltdinsecticide"
    },
    {
       "code": "M00050",
       "name": "LESENTA 100gm",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lesenta.png",
       "search_term": "lesenta 100gm bayer ltdinsecticide"
    }, 
    {
       "code": "M00051",
       "name": "MOVENTO OD 100ml",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "movento.png",
       "search_term": "movento od 100ml bayer ltdinsecticide"
    }, 
    {
       "code": "M00052",
       "name": "NATIVO 10gm",
       "company": "BAYER LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "nativo.png",
       "search_term": "nativo 10gm bayer ltdfungicide"
    },
    {
       "code": "M00053",
       "name": "NATIVO 100gm",
       "company": "BAYER LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "nativo.png",
       "search_term": "nativo 100gm bayer ltdfungicide"
    },
    {
       "code": "M00054",
       "name": "REGENT ULTRA 4kg",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "regent ultra.png",
       "search_term": "regent ultra 4kg bayer ltdinsecticide"
    }, 
    {
       "code": "M00055",
       "name": "SENCOR",
       "company": "BAYER LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "sencor.png",
       "search_term": "sencor bayer ltdherbicide"
    },
    {
       "code": "M00056",
       "name": "SOLOMON 250ml",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "solomon.png",
       "search_term": "solomon 250ml bayer ltdinsecticide"
    },
    {
       "code": "M00057",
       "name": "REGENT ULTRA 1kg",
       "company": "BAYER LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "regent ultra.png",
       "search_term": "regent ultra 1kg bayer ltdinsecticide"
    },
    {
       "code": "M00058",
       "name": "SAATHI",
       "company": "UPL LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "saathi.png",
       "search_term": "saathi upl ltdherbicide"
    },
    {
       "code": "M00059",
       "name": "NARKIS",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "narkis.png",
       "search_term": "narkis adama india ltdherbicide"
    },
    {
       "code": "M00060",
       "name": "GALIGAN",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "galigan.png",
       "search_term": "galigan adama india ltdherbicide"
    }, 
    {
       "code": "M00061",
       "name": "BARAZIDE",
       "company": "ADAMA INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "barazide.png",
       "search_term": "barazide adama india ltdherbicide"
    },
    {
       "code": "M00062",
       "name": "ATRANEX",
       "company": "ADAMA INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "atranex.png",
       "search_term": "atranex adama india ltdherbicide"
    },
    {
       "code": "M00063",
       "name": "CONEO-71",
       "company": "ATUL LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "coneo-71.png",
       "search_term": "coneo-71 atul ltdherbicide"
    },
    {
       "code": "M00064",
       "name": "REEVA",
       "company": "RALLIS INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "reeva.png",
       "search_term": "reeva tata india ltdinsecticide"
    },
    {
       "code": "M00065",
       "name": "ATRATAF",
       "company": "RALLIS INDIA LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "atrataf.png",
       "search_term": "atrataf tata india ltdherbicide"
    },
    {
       "code": "M00066",
       "name": "BAHAAR",
       "company": "RALLIS INDIA LTD",
       "category": "PGR",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "bahaar.png",
       "search_term": "bahaar tata india ltdpgr"
    },
    {
       "code": "M00067",
       "name": "BLITOX",
       "company": "RALLIS INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "blitox.png",
       "search_term": "blitox tata india ltdfungicide"
    },
    {
       "code": "M00068",
       "name": "SURPLUS",
       "company": "RALLIS INDIA LTD",
       "category": "Micronutrient Fertilizer",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "surplus.png",
       "search_term": "surplus tata india ltdmicronutrient fertilizer"
    },
    {
       "code": "M00069",
       "name": "TAFGOR",
       "company": "RALLIS INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "tafgor.png",
       "search_term": "tafgor tata india ltdinsecticide"
    },
    {
       "code": "M00070",
       "name": "ELETRON",
       "company": "UPL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "electron.png",
       "search_term": "electron upl ltdinsecticide"
    },
    {
       "code": "M00071",
       "name": "LANCERGOLD",
       "company": "UPL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lancergold.png",
       "search_term": "lancergold upl ltdinsecticide"
    },
    {
       "code": "M00072",
       "name": "SAAF",
       "company": "UPL LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "saaf.png",
       "search_term": "saaf upl ltdfungicide"
    },
    {
       "code": "M00073",
       "name": "TRISKELE",
       "company": "UPL LTD",
       "category": "Herbicidecide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "triskele.png",
       "search_term": "triskele upl ltdherbicide"
    },
    {
       "code": "M00074",
       "name": "ZEBA",
       "company": "UPL LTD",
       "category": "Fertilizer",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "zeba.png",
       "search_term": "zeba upl ltdfertilizer water absorber"
    },
    {
       "code": "M00075",
       "name": "ACROBAT",
       "company": "BASF",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "acrobat.png",
       "search_term": "acrobat basf fungicide"
    },
    {
       "code": "M00076",
       "name": "CABRIO TOP",
       "company": "BASF",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "cabrio top.png",
       "search_term": "cabrio top basf fungicide"
    },
    {
       "code": "M00077",
       "name": "EXPONUS",
       "company": "BASF",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "exponus.png",
       "search_term": "exponus basf insecticide"
    },
    {
       "code": "M00078",
       "name": "INTREPID",
       "company": "BASF",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "intrepid.png",
       "search_term": "intrepid basf insecticide"
    },
    {
       "code": "M00079",
       "name": "LIBREL TMX 2",
       "company": "BASF",
       "category": "Fertilizer",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "librel TMX2.png",
       "search_term": "librel tmx 2 basf fertilizer"
    },
    {
       "code": "M00080",
       "name": "LIHOCIN",
       "company": "BASF",
       "category": "PGR",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lihocin.png",
       "search_term": "lihocin basf pgr"
    },
    {
       "code": "M00081",
       "name": "MERIVON",
       "company": "BASF",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "merivon.png",
       "search_term": "merivon basf fungicide"
    },
    {
       "code": "M00082",
       "name": "POLYRAM",
       "company": "BASF",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "polyram.png",
       "search_term": "polyram basf fungicide"
    },
    {
       "code": "M00083",
       "name": "PRIAXOR",
       "company": "BASF",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "priaxor.png",
       "search_term": "priaxor basf fungicide"
    },
    {
       "code": "M00084",
       "name": "VESNIT",
       "company": "BASF",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "vesnit.png",
       "search_term": "vesnit basf herbicide"
    },
    {
       "code": "M00085",
       "name": "CONVO GLYPHOSATE 41% SL",
       "company": "ATUL LTD",
       "category": "Herbicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "convo.png",
       "search_term": "convo glyphosate 41% sl atul ltdherbicide"
    },
    {
       "code": "M00086",
       "name": "LEPTO 10gm",
       "company": "ATUL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lepto.png",
       "search_term": "lepto 10gm atul ltdinsecticide"
    },
    {
       "code": "M00087",
       "name": "LEPTO 50gm",
       "company": "ATUL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lepto.png",
       "search_term": "lepto 50gm atul ltdinsecticide"
    },
    {
       "code": "M00088",
       "name": "LEPTO 100gm",
       "company": "ATUL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lepto.png",
       "search_term": "lepto 100gm atul ltdinsecticide"
    },
    {
       "code": "M00089",
       "name": "LEPTO 250gm",
       "company": "ATUL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "lepto.png",
       "search_term": "lepto 250gm atul ltdinsecticide"
    },
    {
       "code": "M00090",
       "name": "MONIL 1kg (FLIPRONIL 0.3% GR)",
       "company": "ATUL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "monil.png",
       "search_term": "monil 1kg (flipronil 0.3% gr) atul ltdinsecticide"
    },
    {
       "code": "M00091",
       "name": "MONIL 5kg (FLIPRONIL 0.3% GR)",
       "company": "ATUL LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "monil.png",
       "search_term": "monil 5kg (flipronil 0.3% gr) atul ltdinsecticide"
    },
    {
       "code": "M00092",
       "name": "RIPER",
       "company": "ATUL LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "riper.png",
       "search_term": "riper atul ltdfungicide"
    },
    {
       "code": "M00093",
       "name": "AGAS",
       "company": "ADAMA INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "agas.png",
       "search_term": "agas adama india ltdinsecticide"
    },
    {
       "code": "M00094",
       "name": "CUSTODIA",
       "company": "ADAMA INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "custodia.png",
       "search_term": "custodia adama india ltdfungicide"
    },
    {
       "code": "M00095",
       "name": "MAINEX EC",
       "company": "ADAMA INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "mainex ec.png",
       "search_term": "mainex ec adama india ltdfungicide"
    },
    {
       "code": "M00096",
       "name": "NIMROD",
       "company": "ADAMA INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "nimrod.png",
       "search_term": "nimrod adama india ltdfungicide"
    },
    {
       "code": "M00097",
       "name": "ORIUS (TEBUCONAZOLE 25.9% EC)",
       "company": "ADAMA INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "orius.png",
       "search_term": "orius (tebuconazole 25.9% ec) adama india ltdfungicide"
    },
    {
       "code": "M00098",
       "name": "PREMAIN SUPER",
       "company": "ADAMA INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "premain super.png",
       "search_term": "premain super adama india ltdfungicide"
    },
    {
       "code": "M00099",
       "name": "PREMAIN",
       "company": "ADAMA INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "premain.png",
       "search_term": "premain adama india ltdfungicide"
    },
    {
       "code": "M00100",
       "name": "PROFIGAN PLUS",
       "company": "ADAMA INDIA LTD",
       "category": "Insecticide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "profigan plus.png",
       "search_term": "profigan plus adama india ltdfungicide"
    },
    {
       "code": "M00101",
       "name": "SHAMIR",
       "company": "ADAMA INDIA LTD",
       "category": "Fungicide",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "shamir.png",
       "search_term": "shamir adama india ltdfungicide"
    },
    {
       "code": "M00102",
       "name": "12-61-0 (AMMONIUM PHOSPHATE)",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "12-61-0.png",
       "search_term": "12-61-0 (ammonium phosphate) iffco ltdfertilizer"
    },
    {
       "code": "M00103",
       "name": "17-44-0 (UREA PHOSPHATE)",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "17-44-0.png",
       "search_term": "17-44-0 (urea phosphate) iffco ltdfertilizer"
    },
    {
       "code": "M00104",
       "name": "NANO DAP",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "nano dap.png",
       "search_term": "nano dap iffco ltdfertilizer"
    },
    {
       "code": "M00105",
       "name": "NANO UREA",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "nano urea.png",
       "search_term": "nano urea iffco ltdfertilizer"
    },
    {
       "code": "M00106",
       "name": "NPK 19-19-19",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "NPK 19-19-19.png",
       "search_term": "npk 19-19-19 iffco ltdfertilizer"
    },
    {
       "code": "M00107",
       "name": "SAGARIKA GOLD",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "sagarika gold.png",
       "search_term": "sagrika gold iffco ltdfertilizer"
    },
    {
       "code": "M00108",
       "name": "SAGARIKA",
       "company": "IFFCO LTD",
       "category": "FERTILIZER",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "sagarika.png",
       "search_term": "sagrika iffco ltdfertilizer"
    }
];
