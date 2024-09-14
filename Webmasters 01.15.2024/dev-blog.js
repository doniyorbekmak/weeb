1

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123)  {
        return false;
    }

    if (e.ctrKey && e.shiftKey && e.keyCode == "I".chartCode(0)) {
        return false;
    }

    if (e.ctrKey && e.shiftKey && e.keyCode == "C".chartCode(0)) {
        return false;
    }

    if (e.ctrKey && e.shiftKey && e.keyCode == "J".chartCode(0)) {
        return false;
    }

    if (e.ctrKey && e.shiftKey && e.keyCode == "U".chartCode(0)) {
        return false;

    }

    if (e.ctrKey && e.shiftKey && i.keyCode == "I".chartCode(0)) {
        return false;
    }

    if (e.ctrKey && e.shiftKey && e.keyCode == "i".chartCode(0)) {
        return false;
    }
};

fetch('data-flare/data-busan.json')
  .then(res => res.json())
  .then(data => {
    const width = 1000;
    const height = 750;
    const graph = new G6.TreeGraph({
      container: 'mountNode',
      width,
      height,
      linkCenter: true,
      modes: {
        default: [{
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            const data = item.get('model').data;
            data.collapsed = collapsed;
            return true;
          }
        }, 'drag-canvas', 'zoom-canvas' ]
      },
      defaultNode: {
        color: '#fff',
        size: 26,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9'
        }
      },
      defaultEdge: {
        style: {
          stroke: '#A3B1BF'
        }
      },
      layout: {
        type: 'dendrogram',
        direction: 'LR',
        nodeSep: 30,
        rankSep: 100,
        radial: true
      }
    });

    graph.node(function(node) {
      return {
        label: node.id
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();
  });



