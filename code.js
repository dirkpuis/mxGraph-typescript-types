function main(container) {
    // let asdf = document.body.childNodes[2];
    // let asdf = document;
    // let br = asdf.ownerDocument.createElement('br');
    // Checks if the browser is supported
    if (!mxClient.isBrowserSupported()) {
        // Displays an error message if the browser is not supported.
        mxUtils.error('Browser is not supported!', 200, false);
    }
    else {
        // let asdf = new mxCellHighlight(new mxGraph(container), "", 12, true);
        // asdf.setHighlightCol
        var xmlDocument = mxUtils.createXmlDocument();
        var sourceNode = xmlDocument.createElement('Source');
        var targetNode = xmlDocument.createElement('Target');
        var subtargetNode = xmlDocument.createElement('Subtarget');
        // Creates the graph inside the given container
        var graph = new mxGraph(container);
        graph.setConnectable(true);
        graph.setTooltips(true);
        graph.setAllowDanglingEdges(false);
        graph.setMultigraph(false);
        // Source nodes needs 1..2 connected Targets
        graph.multiplicities.push(new mxMultiplicity(true, 'Source', null, null, 1, 2, ['Target'], 'Source Must Have 1 or 2 Targets', 'Source Must Connect to Target'));
        // Source node does not want any incoming connections
        graph.multiplicities.push(new mxMultiplicity(false, 'Source', null, null, 0, 0, null, 'Source Must Have No Incoming Edge', null)); // Type does not matter
        // Target needs exactly one incoming connection from Source
        graph.multiplicities.push(new mxMultiplicity(false, 'Target', null, null, 1, 1, ['Source'], 'Target Must Have 1 Source', 'Target Must Connect From Source'));
        // Enables rubberband selection
        new mxRubberband(graph);
        // Removes cells when [DELETE] is pressed
        var keyHandler = new mxKeyHandler(graph);
        keyHandler.bindKey(46, function (evt) {
            if (graph.isEnabled()) {
                graph.removeCells();
            }
        });
        // Installs automatic validation (use editor.validation = true
        // if you are using an mxEditor instance)
        var listener = function (sender, evt) {
            graph.validateGraph();
        };
        graph.getModel().addListener(mxEvent.CHANGE, listener);
        // Gets the default parent for inserting new cells. This
        // is normally the first child of the root (ie. layer 0).
        var parent = graph.getDefaultParent();
        // Adds cells to the model in a single step
        graph.getModel().beginUpdate();
        try {
            var v1 = graph.insertVertex(parent, null, sourceNode, 20, 20, 80, 30);
            var v2 = graph.insertVertex(parent, null, targetNode, 200, 20, 80, 30);
            var v3 = graph.insertVertex(parent, null, targetNode.cloneNode(true), 200, 80, 80, 30);
            var v4 = graph.insertVertex(parent, null, targetNode.cloneNode(true), 200, 140, 80, 30);
            var v5 = graph.insertVertex(parent, null, subtargetNode, 200, 200, 80, 30);
            var v6 = graph.insertVertex(parent, null, sourceNode.cloneNode(true), 20, 140, 80, 30);
            var e1 = graph.insertEdge(parent, null, '', v1, v2);
            //var e4 = graph.insertEdge(parent, null, '', v1, v4);
        }
        finally {
            // Updates the display
            graph.getModel().endUpdate();
        }
    }
}
;
