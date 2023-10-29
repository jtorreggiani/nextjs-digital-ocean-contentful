# Digital Ocean Static Deployment

### 1. Update `next.config.js` file.

```JavaScript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig;
```

### 2. Review the defaults

![Default setup](/documentation/default-setup.png)

### 3. Edit resource type to be static

![edit-resource-type](/documentation/edit-resource-type.png)

### 4. Update build command

Change the build command to be `npx next build`.

![edit-build-command](/documentation/edit-build-command.png)
