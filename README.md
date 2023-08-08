# Chatbot UI

The Chatbot UI is reference from [mckaywrightly/chatbot-ui](https://github.com/mckaywrigley/chatbot-ui).

## Deploy

**Docker**

> TODO: Incomplete

Build locally:

```shell
docker build -t chatgpt-ui .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 chatgpt-ui
```

## Running Locally

**1. Install Dependencies**

```bash
npm i
```

**2. Create .env.local file**

Create a .env.local file in the root of the repo.

```bash
OPENAI_API_KEY=YOUR_KEY
```

**3. Run App**

```bash
npm run dev
```

**4. Use It**

You should be able to start searching.

[GCSE]: https://developers.google.com/custom-search/v1/overview
