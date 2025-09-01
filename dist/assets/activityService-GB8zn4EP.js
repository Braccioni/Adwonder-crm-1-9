import{s as c,e as s}from"./index-DgQnJBRP.js";const n=t=>{var e,a,i;return(t==null?void 0:t.code)==="PGRST116"||((e=t==null?void 0:t.message)==null?void 0:e.includes("relation"))&&((a=t==null?void 0:t.message)==null?void 0:a.includes("does not exist"))||(t==null?void 0:t.code)==="42P01"||((i=t==null?void 0:t.details)==null?void 0:i.includes("does not exist"))},o={async getAll(){try{const{data:t,error:e}=await c.from("activities").select(`
          *,
          client:clients(*),
          deal:deals(*)
        `).order("data_ora",{ascending:!1});if(e){if(n(e))return console.warn("Activities table not configured yet. Returning empty array."),[];throw e}return t||[]}catch(t){return console.warn("Activity service not available:",t),[]}},async create(t){try{const{data:e,error:a}=await c.from("activities").insert([t]).select(`
          *,
          client:clients(*),
          deal:deals(*)
        `).single();if(a)throw n(a)?new Error("Activities table not configured. Please check your database setup."):a;return s.handleSuccess("Attività creata con successo"),e}catch(e){throw s.handleWriteError(e,"create","activity")}},async update(t,e){try{const{data:a,error:i}=await c.from("activities").update({...e,updated_at:new Date().toISOString()}).eq("id",t).select(`
          *,
          client:clients(*),
          deal:deals(*)
        `).single();if(i)throw n(i)?new Error("Activities table not configured. Please check your database setup."):i;return s.handleSuccess("Attività aggiornata con successo"),a}catch(a){throw s.handleWriteError(a,"update","activity")}},async delete(t){try{const{error:e}=await c.from("activities").delete().eq("id",t);if(e)throw n(e)?new Error("Activities table not configured. Please check your database setup."):e;s.handleSuccess("Attività eliminata con successo")}catch(e){throw s.handleWriteError(e,"delete","activity")}}};export{o as a};
