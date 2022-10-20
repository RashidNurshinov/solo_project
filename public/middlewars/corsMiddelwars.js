const corsMiddleware = (req, res, next) => {
    const accessList = [
        `https://online.moysklad.ru/api/remap/1.2/report/turnover/all`,
        "https://online.moysklad.ru/api/remap/1.2/report/dashboard/day",
        "https://online.moysklad.ru/api/remap/1.2/report/dashboard/week",
        "https://online.moysklad.ru/api/remap/1.2/report/dashboard/month",
        "https://online.moysklad.ru/api/remap/1.2/report/profit/byproduct",
    ];
    const origin = req.get('origin');
    if (accessList.includes(origin)) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Content-type', 'application/x-www-form-urlencoded');
      res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
      res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    }
    next();
}
module.exports = corsMiddleware;
