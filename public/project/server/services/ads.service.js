module.exports = function (app, Ads) {
    app.get("/api/project/ads", getAds);
    app.post("/api/project/user/ad", postAd);
    app.delete("/api/project/ad/:aid", removeAd);
    app.put("/api/project/ad/:aid", updateAd);
    
    function getAds(req, res) {
        Ads.getAllAds()
            .then(function (ads) {
                res.json(ads);
            });
    };

    function postAd(req, res) {
        var ad = req.body || {};
        Ads.postAd(ad)
            .then(function (ad) {
                res.json(ad);
            });
    };

    function removeAd(req, res) {
        var aid = req.params.aid;
        Ads.removeAd(aid)
            .then(function (ads) {
                res.json(ads);
            });
    };

    function updateAd(req, res) {
        var aid = req.params.aid;
        var ad = req.body || {};
        Ads.updateAd(aid, ad)
            .then(function (ads) {
                res.json(ads);
            });
    };
};