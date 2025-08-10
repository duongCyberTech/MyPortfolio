import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Pdata } from '../data/data';

import { useTreeItemModel } from '@mui/x-tree-view/hooks';

export const MUI_X_PRODUCTS = [
  {
    id: 'education',
    label: 'My Education',
    children: [
      {
        id: 'hsc',
        label: 'High School',
        secondaryLabel: '2019 - 2022',
      },
      {
        id: 'uni',
        label: 'University',
        secondaryLabel: '2022 - 2026',
      },
    ],
  },
  {
    id: 'certifications',
    label: 'My Certifications',
    children: [
      {
        id: 'cert-1',
        label: 'Oracle',
        secondaryLabel: '2025',
      },
      {
        id: 'cert-2',
        label: 'Bosch',
        secondaryLabel: '2025',
      },
    ],
  }
];

function CustomLabel({ children, className, secondaryLabel }) {
  return (
    <div className={className}>
      <Typography>{children}</Typography>
      {secondaryLabel && (
        <Typography variant="caption" color="secondary">
          {secondaryLabel}
        </Typography>
      )}
    </div>
  );
}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
  const item = useTreeItemModel(props.itemId);

  return (
    <TreeItem
      {...props}
      ref={ref}
      slots={{
        label: CustomLabel,
      }}
      slotProps={{
        label: { secondaryLabel: item?.secondaryLabel || '' },
      }}
    />
  );
});

export default function LabelSlot({ fileId, setFileId }) {
  return (
    <Box sx={{ minHeight: 200, minWidth: 200, bgcolor: '#314158', p: 2, color: '#90A1B9', fontFamily: 'Intel One Mono', fontWeight: '800' }}>
        <RichTreeView
            items={MUI_X_PRODUCTS}
            defaultExpandedItems={['pickers']}
            onSelectedItemsChange={(event, ids) => {
                console.log('Selected IDs:', ids);
                console.log('Selected Item:', Pdata.find(item => item.id === ids));
                setFileId(ids); // chỉ lấy 1 id đầu tiên
            }}
            slots={{ item: CustomTreeItem }}
        />
    </Box>
  );
}
