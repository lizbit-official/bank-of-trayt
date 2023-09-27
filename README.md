# Bank of Trayt

Take-home challenge for Trayt Health comprising a basic layout, several pages, and an interest calculator.

Built in Next.js, using the app router, this project is set up for static rendering of initial pages and 
in support of a gradual transition to React Server Components.

## Dependencies
- node.js v18+

## Building

When running, the app is served on port 3000.

### Production
```
npm install
npm run build
npm run start  ; to run nodejs server
```

#### Docker
```
docker build -t bank-of-trayt .
docker run -d bank-of-trayt
```

### Development
```
npm install
npm run dev
```

## Testing
```
npm run test
```
