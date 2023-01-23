# zquint xyz

### To do
- Verify webhook route
  - Install logger
  - Log on webhook post
- Complete spawn function to launch shell script
- complete shell script
  - Parse webhook `modified` array for paths
  - rm `node_modules`, download API, and run `npm i` if path included
  - git clone frontend, `npm i`, `npm run build`, and mv dist, etc, if path included
