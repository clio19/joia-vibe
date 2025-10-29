import { Template } from 'e2b'

export const template = Template()
  .fromImage('node:21-slim')
  .setUser('root')
  .setWorkdir('/')
  .runCmd('apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*')
  .copy('compile_page.sh', '/compile_page.sh')
  .runCmd('chmod +x /compile_page.sh')
  .setWorkdir('/home/user')
  .runCmd('npx --yes create-next-app@15.3.3 . --yes && npx --yes shadcn@2.6.3 init --yes -b neutral --force && npx --yes shadcn@2.6.3 add --all --yes')
  .setUser('user')