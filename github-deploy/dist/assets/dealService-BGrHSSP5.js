import{s as n,e as l}from"./index-DgQnJBRP.js";const c=e=>{var a,t,s;return(e==null?void 0:e.code)==="PGRST116"||((a=e==null?void 0:e.message)==null?void 0:a.includes("relation"))&&((t=e==null?void 0:e.message)==null?void 0:t.includes("does not exist"))||(e==null?void 0:e.code)==="42P01"||((s=e==null?void 0:e.details)==null?void 0:s.includes("does not exist"))},r={async getAll(){try{const{data:e,error:a}=await n.from("deals").select(`
          *,
          client:clients(*)
        `).order("created_at",{ascending:!1});return a?c(a)?(console.warn("Deals table not configured yet. Returning empty array."),[]):l.handleReadError(a,"fetch deals",[]):e||[]}catch(e){return console.warn("Deal service not available:",e),[]}},async getById(e){try{const{data:a,error:t}=await n.from("deals").select(`
          *,
          client:clients(*)
        `).eq("id",e).single();return t?c(t)?(console.warn("Deals table not configured yet."),null):l.handleReadError(t,"fetch deal by id",null):a}catch(a){return console.warn("Deal service not available:",a),null}},async create(e){try{const{data:a,error:t}=await n.from("deals").insert([e]).select(`
          *,
          client:clients(*)
        `).single();if(t)throw l.handleWriteError(t,"create deal"),t;return l.handleSuccess("Deal created successfully"),a}catch(a){throw l.handleWriteError(a,"create deal"),a}},async update(e,a){try{const{data:t,error:s}=await n.from("deals").update(a).eq("id",e).select(`
          *,
          client:clients(*)
        `).single();if(s)throw l.handleWriteError(s,"update deal"),s;return l.handleSuccess("Deal updated successfully"),t}catch(t){throw l.handleWriteError(t,"update deal"),t}},async delete(e){try{const{error:a}=await n.from("deals").delete().eq("id",e);if(a)throw l.handleWriteError(a,"delete deal"),a;l.handleSuccess("Deal deleted successfully")}catch(a){throw l.handleWriteError(a,"delete deal"),a}}};export{r as d};
