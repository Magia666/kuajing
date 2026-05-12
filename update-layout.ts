import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const viewsDir = join(process.cwd(), 'src', 'views');
const files = readdirSync(viewsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = join(viewsDir, file);
  let content = readFileSync(filePath, 'utf8');

  content = content.replace(/className="bg-\[#f0f2f5\] min-h-screen/g, 'className="bg-[#f0f2f5] h-full overflow-hidden');
  content = content.replace(/min-h-screen/g, 'h-full overflow-hidden');
  content = content.replace(/min-h-\[500px\]/g, 'min-h-0');
  content = content.replace(/overflow-x-auto/g, 'overflow-auto');

  writeFileSync(filePath, content);
}
console.log('Done modifying views');
