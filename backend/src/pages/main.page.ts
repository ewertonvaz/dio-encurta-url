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
            <p>Node Version {{node}}</p>
            <p>OpenSSL Version {{openssl}}</p>
            <p>Unicode Version {{unicode}}</p>
        </body>
    </html>
    <style>{{style}}</style>
`;

const style = `
  body {
    font-family: Roboto, sans-serif;
  }
  h1 {
      font-size: 24px;
      font-weight: bold;
  }
`;

const { node, openssl, unicode } = process.versions;
const merge = {
    title: 'Encurtador de URL API',
    appname: 'API do encurtador de URL',
    node,
    openssl,
    unicode
}

const page = {...merge, style};
const mainPage = () => mustache.render(template, page);
export default mainPage;