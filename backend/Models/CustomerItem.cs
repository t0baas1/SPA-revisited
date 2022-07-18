using System.ComponentModel.DataAnnotations;
namespace backendApi.Models
{
    public class CustomerItem
    {
        public int id { get; set; }
        public string name { get; set; }
        public Address address { get; set; }
    }
    public class Address
    {
        [Key]
        public string streetAddress { get; set;}
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
    }
}