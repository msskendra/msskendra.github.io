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
        "search_term": "2-4-d  1ltrkrishi rasayan p.ltdherbicide"
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
        "company": "ADAMA LTD",
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
        "name": "2-4-D 500ML ",
        "company": "GODREJ AGROTECH LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "godrej-products.png",
        "search_term": "2-4-d 500ml godrej agrotech ltdherbicide"
    },
    {
        "code": "M00010",
        "name": "ADRINO 100 GM ",
        "company": "SYNGENTA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "syngenta-products.png",
        "search_term": "adrino 100 gm syngenta ltdherbicide"
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
        "name": "ALIKA 100ML ",
        "company": "SYNGENTA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "syngenta-products.png",
        "search_term": "alika 100ml syngenta ltdinsecticide"
    },
    {
        "code": "M00014",
        "name": "ALIKA 40 ML",
        "company": "SYNGENTA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "syngenta-products.png",
        "search_term": "alika 40 mlsyngenta ltdinsecticide"
    },
    {
        "code": "M00015",
        "name": "AMNON 100GM",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "amnon 100gmadama  india ltdinsecticide"
    },
    {
        "code": "M00016",
        "name": "AMNON 50 GM.",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
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
        "name": "ANTRACOL 100GM",
        "company": "BAYER LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "bayer-products.png",
        "search_term": "antracol 100gmbayer ltdfungicide"
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
        "name": "AGADI 5KG",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "330",
        "credit_price": "",
        "unit": "Unit",
        "image": "agadi-5kg.jpg",
        "search_term": "agadi 5kg insectside"
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
       "name": "FLAMEBERGE 250ml",
       "company": "ADAMA LTD",
       "category": "PGR",
       "desc": "",
       "stock": "yes",
       "cash_price": "",
       "credit_price": "",
       "unit": "Unit",
       "image": "flamberge.png",
       "search_term": "flameberge 250ml adama ltdpgr"
    }
];
