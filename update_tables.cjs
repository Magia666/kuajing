const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'src', 'views');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let dirty = false;

    // table
    content = content.replace(/<table className="([^"]+)"([^>]*)>/g, (match, classNames, rest) => {
        if (!classNames.includes('border-collapse')) return match; 
        
        let newClasses = classNames
            .replace(/text-\[11px\]/g, 'text-[12px]')
            .replace(/text-\[12px\]/g, 'text-[12px]') 
            .replace(/text-center/g, 'text-left')
            .replace(/border-gray-200/g, '') 
            .replace(/border\s/g, '') 
            .replace(/\s+/g, ' ')
            .trim();
        
        if (!newClasses.includes('text-[12px]')) newClasses += ' text-[12px]';
        if (!newClasses.includes('text-left')) newClasses += ' text-left';
        
        dirty = true;
        return `<table className="${newClasses}"${rest}>`;
    });

    // thead
    content = content.replace(/<thead className="([^"]+)"([^>]*)>/g, (match, classNames, rest) => {
        let newClasses = 'bg-[#f5f7fa] text-gray-600 font-medium';
        dirty = true;
        return `<thead className="${newClasses}"${rest}>`;
    });
    
    // th
    content = content.replace(/<th(?:(.*?)className="([^"]+)")?([^>]*)>/gi, (match, pre, classNames, rest) => {
       if(!classNames) {
           dirty = true;
           return `<th className="px-3 py-2 border-r border-gray-200"${rest}>`;
       }
       let newClasses = classNames
            .replace(/px-2/g, 'px-3')
            .replace(/font-normal/g, '')
            .replace(/h-10/g, '')
            .replace(/text-center/g, '')
            .replace(/\s+/g, ' ').trim();
       
       if (!newClasses.includes('px-3')) newClasses += ' px-3';
       if (!newClasses.includes('py-2')) newClasses += ' py-2';
       if (!newClasses.includes('border-r')) newClasses += ' border-r border-gray-200';
       
       // edge cases: remove multiple classes
       newClasses = Array.from(new Set(newClasses.split(' '))).join(' ');

       dirty = true;
       return `<th${pre || ' '}className="${newClasses.trim()}"${rest}>`;
    });
    
    // tbody
    content = content.replace(/<tbody className="([^"]+)"([^>]*)>/g, (match, classNames, rest) => {
        let newClasses = 'divide-y divide-gray-200';
        dirty = true;
        return `<tbody className="${newClasses}"${rest}>`;
    });

    // tr inside tbody
    content = content.replace(/<tr(?:(.*?)className="([^"]+)")?([^>]*)>/gi, (match, pre, classNames, rest) => {
        if (!classNames) return match; 
        if (classNames.includes('h-10 text-gray-600')) return match; 
        
        if (classNames.includes('h-10') || classNames.includes('hover:bg-gray-50') || classNames.includes('hover:bg-blue-50') || classNames.includes('bg-white')) {
            let newClasses = 'hover:bg-gray-50 transition-colors';
            dirty = true;
            return `<tr${pre || ' '}className="${newClasses}"${rest}>`;
        }
        return match;
    });

    // td
    content = content.replace(/<td(?:(.*?)className="([^"]+)")?([^>]*)>/gi, (match, pre, classNames, rest) => {
        // preserve complex className that already holds cn() pattern etc?
        if (match.includes('className={')) return match;

        if (!classNames) {
           dirty = true;
           return `<td className="px-3 py-2 border-r border-gray-200"${rest}>`;
        }

        let newClasses = classNames
             .replace(/px-2/g, 'px-3')
             .replace(/text-center/g, '')
             .replace(/\s+/g, ' ').trim();
        
        if (!newClasses.includes('px-3')) newClasses += ' px-3';
        if (!newClasses.includes('py-2')) newClasses += ' py-2';
        if (!newClasses.includes('border-r')) newClasses += ' border-r border-gray-200';
        
        // edge cases: remove multiple classes
        newClasses = Array.from(new Set(newClasses.split(' '))).join(' ');

        dirty = true;
        return `<td${pre || ' '}className="${newClasses.trim()}"${rest}>`;
    });

    content = content.replace(/<tr className="h-10 text-gray-600">/g, '<tr>');
    content = content.replace(/ className=""/g, '');

    // fix thead className mistake from matching with <th...
    content = content.replace(/<thead className="([^"]+px-3[^"]*|[^"]*py-2[^"]*|[^"]*border-r[^"]*)"([^>]*)>/g, '<thead className="bg-[#f5f7fa] text-gray-600 font-medium">');

    if (dirty) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed:', filePath);
    }
}

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') && !fullPath.includes('ProductManagement.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<table')) {
                processFile(fullPath);
            }
        }
    });
}

walk(viewsDir);
