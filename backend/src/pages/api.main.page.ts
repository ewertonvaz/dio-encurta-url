import mustache from 'mustache';

const template = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:display=swap" rel="stylesheet">
            <title>{{title}}</title>
        </head>
        <body>
            <h1>{{appname}}</h1>
            <h2>Uso:</h2>
            <div style="display:flex;align-items: center;">
                <p>Endpoint 1:</p><span><a href="{{endpoint1}}" />{{endpoint1}}</a></span>
            </div>
            <div style="display:flex;align-items: center;">
                <p>Endpoint 2:</p><span><a href="{{endpoint2}}" />{{endpoint2}}</a></span>
            </div>
        </body>
    </html>
    <style>{{style}}</style>
`;

const style = `
  body {
    font-family: Roboto, sans-serif;
  }
  h1 {
      font-size: 32px;
      font-weight: bold;
  }
  h2 {
    font-size: 24px;
    font-weight: normal;
  }
`;

const merge = {
    title: 'API main page',
    appname: 'API',
    endpoint1: '/api/generate',
    endpoint2: '/api/validate',
}

const page = {...merge, style};

const apiMainPage = () => mustache.render(template, page);
export default apiMainPage;