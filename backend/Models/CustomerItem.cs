using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace backendApi.Models
{
    public class CustomerItem
    {
        public int id { get; set; }
        public string name { get; set; }
        [JsonProperty("address")]
        public Address address { get; set; }
    }
    public class Address
    {
        [Key]
        [JsonProperty("streetAddress")]
        public string streetAddress { get; set;}
        [JsonProperty("city")]
        public string city { get; set; }
        [JsonProperty("state")]
        public string state { get; set; }
        [JsonProperty("zip")]
        public string zip { get; set; }
    }
}