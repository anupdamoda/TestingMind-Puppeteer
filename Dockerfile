FROM mcr.microsoft.com/playwright:v1.33.0-focal
# copy project (including tests)
COPY . /e2e
WORKDIR /e2e
# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install-deps
# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=list" ]