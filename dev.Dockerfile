FROM node:18
WORKDIR /app
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

ENV PRISMA_OUT "./node_modules/.prisma/client"

RUN addgroup --system --gid 1001 godigital
RUN adduser --system --uid 1001 godigital

USER root
RUN mkdir -p /prefect-tmp
RUN chown -R godigital:godigital /prefect-tmp

USER godigital

CMD ["/bin/sh", "-c", "npm run prisma:generate && npm run dev"]