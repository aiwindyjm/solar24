# Earth land silhouette

Dataset: Natural Earth, 1:110m physical land, `ne_110m_land`.

Source: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson

Downloaded: 2026-09-19.

License: Natural Earth data is public domain. Terms: https://www.naturalearthdata.com/about/terms-of-use/

Processing: preserve the 127 Polygon geometries, remove feature metadata, save coordinate rings in `earth-land.json`. The renderer rasterizes these land rings into an equirectangular texture and adds original grain. No countries, territorial boundaries or place names are represented.

The coastline source is geographic data. Ocean/land colors, clouds, lighting, scale and rotation are artistic choices and are not satellite imagery or a real-time Earth model.
